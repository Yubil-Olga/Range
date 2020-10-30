import EventDispatcher from '../EventDispatcher/EventDispatcher';
import Data from './Data/Data';
import IOptions from '../IOptions';
import ValueSliderOptions from './Options/ValueSliderOptions';
import NumberSliderOptions from './Options/NumberSliderOptions';
import Options from './Options/Options';

export default class Model {
  private options: IOptions;
  public data: Array<Data>;
  public modelChanged = new EventDispatcher(this);
  public optionsChanged = new EventDispatcher(this);

  constructor(settings: IOptions) {
    this.createOptions(settings);
  }

  public createOptions(options: IOptions) {
    let values = [];
    if (Array.isArray(options.values)) {
      values = options.values;
    }

    this.options = values.length > 1 ? new ValueSliderOptions(values, options) : new NumberSliderOptions(options);
  }

  public updateOptions(options: IOptions) {
    this.createOptions(options);
    this.optionsChanged.notify(this.options);
    this.init();
  }

  public getOptions(): IOptions {
    return this.options;
  }

  public getData() {
    return this.data;
  }

  public init(): void {
    this.initData(this.options.isRange);
    this.data.forEach((el) => this.modelChanged.notify(el));
  }

  private initData(isRange: boolean): Array<Data> {
    this.data = [];
    this.data.push(new Data(0, this.options));
    if (isRange) {
      this.data.push(new Data(1, this.options));
    }

    return this.data;
  }

  public stepCalculation(): number {
    const step = (this.options.step/(this.options.end - this.options.start))*100;
    return step;
  }

  public positionCalculation(data: {positionInPercents: number, step: number}): number {
    const { positionInPercents, step } = data;
    const newPosition = Math.round(positionInPercents/step)*step;
    return newPosition;
  }

  public updateModel(data: {positionInPercents: number, index: number}): Array<Data> {
    const { positionInPercents, index } = data;

    let step: number;
    let newPositionInPersents: number;
    let newValue: string;

    if (this.options.values) {
      step = 100/(this.options.values.length - 1);
      newPositionInPersents = this.positionCalculation({ positionInPercents, step });
      newValue = this.options.values[newPositionInPersents/step];
    } else {
      step = this.stepCalculation();
      newPositionInPersents = this.positionCalculation({ positionInPercents, step });
      newValue = Math.round(newPositionInPersents*(this.options.end - this.options.start)/100 + this.options.start).toString();
    }

    this.data[index].update(newValue, newPositionInPersents);

    this.modelChanged.notify(this.data[index]);
    return this.data;
  }
}