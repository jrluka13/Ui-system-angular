import { CreatingItemService } from './creating-item.service';
import { ModalWindowService } from './modal-window.service';
import { parentMock } from '../components/mocks/parent-mock';

describe('CreatingItemService', () => {
  let service: CreatingItemService;

  beforeEach(() => {
    service = new CreatingItemService(new ModalWindowService());
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create file with name from prompt field', () => {

    service.createFile(parentMock);
    expect(parentMock[2].name).toBe('vlad');
  });

  it('should create folder with name from prompt field', () => {

    service.createFolder(parentMock);
    expect(parentMock[2].name).toBe('vlad');
  });
});
