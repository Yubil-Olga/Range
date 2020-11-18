import Handle from './Handle';
import Tagmark from '../Tagmark/Tagmark';

const trackElement = document.createElement('div');
trackElement.className = 'perfect-slider__track';

describe('Handle with tagmark', () => {
  const handle = new Handle(trackElement, true);

  test('Handle is created', () => {
    expect(handle.handle.tagName).toBe('DIV');
    expect(handle.handle.className).toBe('perfect-slider__handle');
  });

  test('Handle has tagmark', () => {
    expect(handle.tagmark).not.toBeNull();
    expect(handle.tagmark).toBeInstanceOf(Tagmark);
  });
});

describe('Handle without tagmark', () => {
  const handle = new Handle(trackElement, false);

  test('Handle has not any tagmark', () => {
    expect(handle.tagmark).toBeNull();
  });
});

describe('Handle: test methods', () => {
  const handle = new Handle(trackElement, true);

  test('Horisontal slider: move handle', () => {
    Object.defineProperty(trackElement, 'clientWidth', {value: 300, configurable: true});
    Object.defineProperty(handle.handle, 'clientWidth', {value: 30, configurable: true});
    handle.moveHandle(20, false);
    expect(handle.handle.style.left).toBe('15%');
  });

  test('Vertical slider: move handle', () => {
    Object.defineProperty(trackElement, 'clientHeight', {value: 300, configurable: true});
    Object.defineProperty(handle.handle, 'clientHeight', {value: 30, configurable: true});
    handle.moveHandle(50, true);
    expect(handle.handle.style.top).toBe('45%');
  });

  test('Update handle position: move handle is called', () => {
    handle.moveHandle = jest.fn();
    handle.updateHandlePosition({positionInPercents: 20, isVertical: true});
    expect(handle.moveHandle).toBeCalled();
    expect(handle.moveHandle).toBeCalledWith(20, true);
  });
});
