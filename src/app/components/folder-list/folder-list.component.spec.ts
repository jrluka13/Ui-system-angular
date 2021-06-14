import { FolderListComponent } from './folder-list.component';
import { FileSystemItemTypes } from '../../enums/file-system-item-types';

describe('FolderListComponent', () => {
  let component: FolderListComponent;

  beforeEach(() => {
    component = new FolderListComponent();

  });

  it('should change isOpened', function () {
    expect(component.folder).toBe(FileSystemItemTypes.folder);
  });
});
