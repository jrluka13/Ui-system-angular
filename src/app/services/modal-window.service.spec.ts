import { ModalWindowService } from './modal-window.service';

describe('ModalWindowService', () => {
  let service: ModalWindowService;

  beforeEach(() => {
    service = new ModalWindowService();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return empty line', function () {
    let name = service.promptWithMessage('Write name empty line');

    expect(name).toBe('');
  });
  it('should return name', function () {
    let name = service.promptWithMessage('Write name vlad');

    expect(name).toBe('vlad');
  });
});
