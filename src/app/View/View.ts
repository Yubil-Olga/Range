import Slider from './Slider/Slider';
import IOptions from '../Options/IOptions';
import EventDispatcher from '../EventDispatcher/EventDispatcher';

export default class View {
  private options: IOptions
  private activeThumbNum: number
  public slider: Slider
  public inputChanged = new EventDispatcher(this)

  constructor(options: IOptions, elem: HTMLElement) {
    this.options = options;
    this.initSlider(elem);
    this.bindEventListeners();
  }

  initSlider(elem: HTMLElement) {
    this.slider = new Slider(this.options);
    elem.append(this.slider.container);
  }

  bindEventListeners(): void {
    this.handleSliderClick = this.handleSliderClick.bind(this);
    this.slider.track.addEventListener('click', this.handleSliderClick);
    this.slider.label.addEventListener('click', this.handleSliderClick);
    this.handleSliderMouseDown = this.handleSliderMouseDown.bind(this);
    this.slider.track.addEventListener('mousedown', this.handleSliderMouseDown);
    this.slider.track.addEventListener('dragstart', this.stopDrag);
  }

  stopDrag(event: MouseEvent): void {
    event.preventDefault();
  }

  handleSliderMouseDown(event: MouseEvent): void {
    if ((<HTMLElement>event.target).className === 'slider__thumb-marker') {
      this.startSelect();
      this.activeThumbNum = this.slider.thumblers.indexOf((<HTMLElement>event.target).closest('.slider__thumb'));
    }
  }

  handleDocumentMouseUp(): void {
    document.removeEventListener('mouseup', this.handleDocumentMouseUp);
    document.removeEventListener('mousemove', this.handleSliderClick);
  }

  handleSliderClick(event: MouseEvent): void {
    let width: number;
    let coord: number;
    this.transitionDuration(event);
    if (this.options.direction == 'vertical') {
      width = this.slider.track.clientHeight;
      coord = Math.round((<MouseEvent>event).clientY - this.slider.track.getBoundingClientRect().top);
    }
    else {
      width = this.slider.track.clientWidth;
      coord = Math.round((<MouseEvent>event).clientX- this.slider.track.getBoundingClientRect().left);
    }
    if (coord < 0) {
      coord = 0;
    }
    if (coord > width) {
      coord = width;
    }

    const index = this.selectedThumb(coord, width, this.slider.thumblers, event);

    this.callCommand(width, coord, index);
  }

  startSelect(): void {
    document.addEventListener('mousemove', this.handleSliderClick);
    this.handleDocumentMouseUp = this.handleDocumentMouseUp.bind(this);
    document.addEventListener('mouseup', this.handleDocumentMouseUp);
  }

  transitionDuration(event: MouseEvent): void {
    if (event.type === 'click') {
      this.slider.container.style.setProperty('--transition', '0.5s');
    }
    else {
      this.slider.container.style.setProperty('--transition', '0');
    }
  }

  selectedThumb(coord: number, width: number, thumblers: Array<HTMLElement>, event: MouseEvent): number {
    let index = 0;
    if (this.options.type === 2) {
      const min = this.options.direction === 'vertical' ? parseInt(thumblers[0].style.top) : parseInt(thumblers[0].style.left);
      const max = this.options.direction === 'vertical' ? parseInt(thumblers[1].style.top) : parseInt(thumblers[1].style.left);
      const pos = coord*100/width;
      if (event.type === 'mousemove') {
        index = this.activeThumbNum;
      }
      if ( (pos - min) < 0) {
        this.activeThumbNum = 0;
        index = 0;
      }
      if ( (pos - max) > 0) {
        this.activeThumbNum = 1;
        index = 1;
      }
      if ( (pos - min) > (max - pos) && event.type === 'click') {
        index = 1;
      }
    }
    return index;
  }

  callCommand(trackWidth: number, position: number, index: number): void {
    this.inputChanged.notify({trackWidth: trackWidth, position: position, index: index});
  }
}

