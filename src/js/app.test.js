import Popover from '../popover';

document.body.innerHTML = '<button class="popover-button">Click me</button>';

describe('Popover', () => {
  let button;
  let popover;

  beforeEach(() => {
    button = document.querySelector('.popover-button');
    popover = new Popover(button, 'Test Title', 'Test Content');
  });

  test('should create and remove popover on button click', () => {
    button.click();
    expect(document.querySelector('.popover')).not.toBeNull();

    button.click();
    expect(document.querySelector('.popover')).toBeNull();
  });
});

