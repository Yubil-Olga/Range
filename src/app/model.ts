import EventDispatcher from './dispatcher'
import Data from './data'
import { IOptions } from './options'

export default class Model {
    private _options: IOptions
    private _data: Array<Data>
    private _modelChanged: EventDispatcher
   
    constructor(options: IOptions) {
      this._options = options
      this._data = this.initData(options.type)
      this._modelChanged = new EventDispatcher(this)
    }

    get modelChanged() {
      return this._modelChanged
    }
    
    init() {
      this.callCommand(this._data)
    }
    initData(type: number) {
      let arr = []
      for (let i=0; i<type; i++) {
        let data = new Data(i, this._options)
        arr.push(data)
      }
      return arr
    }
    stepCalculation() {
      let step = (this._options.step/(this._options.end - this._options.start))*100
      return step
    }
    positionCalculation(position: number, step: number, trackWidth:number) {
      let percent = (position/trackWidth)*100
      let pos: number
      if ((percent + step) > 100) {
        pos = 100
      }
      else {
        pos = Math.round(percent/step)*step;
      }
      return pos
    }
    valueCalculation(position: number, trackWidth: number, index: number) {
      if (this._options.values) {
        let step = 100/(this._options.values.length - 1);
        let pos = this.positionCalculation(position, step, trackWidth);
        this._data[index].update(this._options.values[pos/step], pos)
      }
      else {
        let step = this.stepCalculation();
        let pos = this.positionCalculation(position, step, trackWidth);
        let newValue = Math.round(pos*(this._options.end - this._options.start)/100 + this._options.start);
        this._data[index].update(newValue.toString(), pos)
      }
      this.callCommand(this._data);
      return this._data
    }
    
    callCommand(data: Array<Data>) {
      this._modelChanged.notify(data)
    }
  } 