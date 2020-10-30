export default class Thumb {
  private thumb: HTMLElement

  constructor() {
    this.createThumb();
  }

  public getElement(): HTMLElement{
    return this.thumb;
  }

  private createThumb(): void {
    this.thumb = document.createElement('div');
    this.thumb.className = 'slider__thumb';
    const thumbmark = document.createElement('span');
    thumbmark.className = 'slider__thumb-marker';
    this.thumb.append(thumbmark);
  }
}