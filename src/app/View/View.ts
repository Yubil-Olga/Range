import bind from 'bind-decorator';
import Slider from './Slider/Slider';
import EventDispatcher from '../EventDispatcher/EventDispatcher';
import IOptions from '../IOptions';

export default class View {
  private options: IOptions
  private activeThumblerIndex: number
  public slider: Slider
  public inputChanged = new EventDispatcher(this)
  private parent: HTMLElement

  constructor(options: IOptions, elem: HTMLElement) {
    this.options = options;
    this.initSlider(elem);
    this.bindEventListeners();
  }

  initSlider(elem: HTMLElement) {
    this.parent = elem;
    this.slider = new Slider(this.options);
    elem.append(this.slider.container);
  }

  updateOptions(options: IOptions) {
    this.options = options;
    this.removeEventListeners();
    this.slider.container.remove();
    this.slider = new Slider(options);
    this.parent.append(this.slider.container);
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.slider.track.addEventListener('click', this.handleSliderClick);
    this.slider.label.addEventListener('click', this.handleSliderClick);
    this.slider.track.addEventListener('mousedown', this.handleSliderMouseDown);
    this.slider.track.addEventListener('dragstart', this.stopDrag);
  }

  removeEventListeners() {
    this.slider.track.removeEventListener('click', this.handleSliderClick);
    this.slider.label.removeEventListener('click', this.handleSliderClick);
    this.slider.track.removeEventListener('mousedown', this.handleSliderMouseDown);
    this.slider.track.removeEventListener('dragstart', this.stopDrag);
  }

  stopDrag(event: MouseEvent): void {
    event.preventDefault();
  }

  @bind
  handleSliderMouseDown(event: MouseEvent): void {
    if ((<HTMLElement>event.target).className === 'slider__thumb-marker') {
      this.startSelect();
      this.activeThumblerIndex = this.slider.thumblers.indexOf((<HTMLElement>event.target).closest('.slider__thumb'));
    }
  }

  handleDocumentMouseUp(): void {
    document.removeEventListener('mouseup', this.handleDocumentMouseUp);
    document.removeEventListener('mousemove', this.handleSliderClick);
  }

  @bind
  handleSliderClick(event: MouseEvent): void {
    this.setTransitionDuration(event);

    const width: number = this.options.isVertical
      ? this.slider.track.clientHeight
      : this.slider.track.clientWidth;

    const positionInPixels: number = this.options.isVertical
      ? Math.round((<MouseEvent>event).clientY - this.slider.track.getBoundingClientRect().top)
      : Math.round((<MouseEvent>event).clientX- this.slider.track.getBoundingClientRect().left);

    const isPositionValid: boolean = positionInPixels >= 0
      && positionInPixels <= width;

    if (!isPositionValid) return;

    const positionInPercents = positionInPixels*100/width;

    this.activeThumblerIndex = this.getActiveThumblerIndex({ positionInPercents: positionInPercents, thumblers: this.slider.thumblers});

    this.inputChanged.notify({ positionInPercents: positionInPercents, index: this.activeThumblerIndex});
  }

  startSelect(): void {
    document.addEventListener('mousemove', this.handleSliderClick);
    this.handleDocumentMouseUp = this.handleDocumentMouseUp.bind(this);
    document.addEventListener('mouseup', this.handleDocumentMouseUp);
  }

  setTransitionDuration(event: MouseEvent): void {
    const transition = event.type === 'click' ? '0.5s' : '0';
    this.slider.container.style.setProperty('--transition', transition);
  }

  getActiveThumblerIndex(data: {positionInPercents: number, thumblers: Array<HTMLElement>}): number {
    const { positionInPercents, thumblers } = data;

    let index = 0;

    if (this.options.isRange) {
      const min = this.options.isVertical ? parseInt(thumblers[0].style.top) : parseInt(thumblers[0].style.left);
      const max = this.options.isVertical ? parseInt(thumblers[1].style.top) : parseInt(thumblers[1].style.left);

      const isMaxThumblerSelected: boolean =
        (positionInPercents - max) > 0 ||
        (positionInPercents - min) > (max - positionInPercents);

      index = isMaxThumblerSelected ? 1 : 0;
    }

    return index;
  }

  update(data: {positionInPercents: number, index: number, value: string}) {
    this.slider.update(data);
  }
}