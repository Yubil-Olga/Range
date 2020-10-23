import IOptions from '../../IOptions';

export default class Options implements IOptions  {
  public isRange: boolean
  public isVertical: boolean
  public prefix: string
  public color: string
  public hasTagmark: boolean

  constructor(options: IOptions) {
    this.init(options);
  }

  init(settings: IOptions): void {
    this.isRange = typeof settings.isRange === 'boolean' ? settings.isRange : false;
    this.isVertical = typeof settings.isVertical === 'boolean' ? settings.isVertical : false;
    this.prefix = typeof settings.prefix === 'string' ? settings.prefix : null;
    this.color = typeof settings.color === 'string' ? settings.color : null;
    this.hasTagmark = typeof settings.hasTagmark === 'boolean' ? settings.hasTagmark : true;
  }
}
