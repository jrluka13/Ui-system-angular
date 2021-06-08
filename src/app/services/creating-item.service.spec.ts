import { CreatingItemService } from './creating-item.service';
import { ModalWindowService } from './modal-window.service';
import { FileSystemItemTypes } from '../enums/file-system-item-types';
import { Folder } from '../interfaces/folder';

describe('CreatingItemService', () => {
  let service: CreatingItemService;

  beforeEach(() => {
    service = new CreatingItemService(new ModalWindowService());
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should create file with name from prompt field', () => {
    let parent: Folder[] = [
      {
        name: 'reewfwe',
        type: FileSystemItemTypes.file,
      },
      {
        name: 'awdawdwd',
        type: FileSystemItemTypes.file,
      },
    ];

    service.createFile(parent);
    expect(parent[2].name).toBe('vlad');
  });
  it('should create folder with name from prompt field', () => {
    let parent: Folder[] = [
      {
        name: 'reewfwe',
        type: FileSystemItemTypes.file,
      },
      {
        name: 'awdawdwd',
        type: FileSystemItemTypes.file,
      },
    ];

    service.createFolder(parent);
    expect(parent[2].name).toBe('vlad');
  });
});
