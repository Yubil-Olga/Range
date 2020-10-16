import Model from '../Model/Model';
import View from '../View/View';
import IOptions from '../IOptions';

export default class Presenter {
  private model: Model
  private view: View

  constructor(element: HTMLElement, model: Model) {
    this.model = model;
    this.init(element);
  }

  private init(element: HTMLElement) {
    this.view = new View(this.model.getOptions(), element);
    const presenter = this;
    this.view.inputChanged.attach(function (sender: View, data: {trackWidth: number, position: number, index: number}) {
      presenter.callModel(data);
    });
    this.model.modelChanged.attach(function(sender: Model, data: {coord: number, index: number, value: string}) {
      presenter.updateViewData(data);
    });
    this.model.optionsChanged.attach(function(sender: Model, args: IOptions) {
      presenter.updateViewOptions(args);
    });
  }

  public updateViewData(data: {coord: number, index: number, value: string}): void {
    this.view.update(data);
  }

  public updateViewOptions(args: IOptions): void {
    this.view.updateOptions(args);
  }

  public callModel(data: {position: number, trackWidth: number, index: number}): void {
    this.model.valueCalculation(data);
  }
}