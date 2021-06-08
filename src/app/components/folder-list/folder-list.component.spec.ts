import { FolderListComponent } from './folder-list.component';

describe('FolderListComponent', () => {
  let component: FolderListComponent;

  beforeEach(() => {
    component = new FolderListComponent();

  });
  it('should change isOpened', function () {
    component.changeVisible(false);
    expect(component.isOpened).toBeFalsy();
  });
});
