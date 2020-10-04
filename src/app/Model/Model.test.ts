import Model from './Model';

describe('Number model', () => {
  const options = {
    type: 1,
    direction: null,
    start: -25,
    end: 100,
    step: 25,
    hasTagmark: true,
    prefix: null
  };
  const slider = new Model(options);

  test('Step calculation return size of one step in %', ( ) => {
    expect(slider.stepCalculation()).toBe(20);
  });
  test('Position calculation return correct position in %', ( ) => {
    expect(slider.positionCalculation(100, 25, 400)).toBe(25);
    expect(slider.positionCalculation(100, 30, 400)).toBe(30);
    expect(slider.positionCalculation(200, 10, 400)).toBe(50);
  });
  test('Selected number value', ( ) => {
    expect(slider.valueCalculation(0, 200, 0)).toMatchObject([{'_coord': 0, '_value': '-25'}]);
    expect(slider.valueCalculation(25, 125, 0)).toMatchObject([{'_coord': 20, '_value': '0'}]);
    expect(slider.valueCalculation(300, 300, 0)).toMatchObject([{'_coord': 100, '_value': '100'}]);
  });
});

describe('Value model', () => {
  const options = {
    type: 1,
    direction: null,
    prefix: null,
    hasTagmark: true,
    values: ['one', 'two', 'three']
  };
  const slider = new Model(options);

  test ('Selected value', () => {
    expect(slider.valueCalculation(0, 200, 0)).toMatchObject([{'coord': 0, 'value': 'one'}]);
    expect(slider.valueCalculation(100, 200, 0)).toMatchObject([{'coord': 50, 'value': 'two'}]);
  });
  test('Init model', () => {
    slider.callCommand = jest.fn();
    slider.init();
    expect(slider.callCommand).toBeCalled();
  });
});