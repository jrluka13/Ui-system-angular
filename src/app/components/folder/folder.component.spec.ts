import { FolderComponent } from './folder.component';

describe('FolderComponent', () => {
  let component: FolderComponent;

  beforeEach(() => {
    component = new FolderComponent();

  });
  it('should change isOpened to true', function () {
    component.openFirstFolder();
    expect(component.isOpened).toBeTruthy();
  });
  it('should change value by event emitter', () => {
    let result = null;

    component.ToggleHandler.subscribe(v => result = v);
    component.openFirstFolder();
    expect(result).toBeTruthy();
  });
});
