import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonsComponent } from './icons-adding-items.component';
import { CreatingItemService } from '../../services/creating-item.service';
import { Folder } from '../../interfaces/folder';
import { ModalWindowService } from '../../services/modal-window.service';
import { FileSystemItemTypes } from '../../enums/file-system-item-types';

describe('ButtonsComponent', () => {
  let component: ButtonsComponent;
  let fixture: ComponentFixture<ButtonsComponent>;
  let service: CreatingItemService;
  const folder: Folder = {
    name: 'Fruit loops',
    type: FileSystemItemTypes.folder,
    children: [
      {
        name: 'reewfwe',
        type: FileSystemItemTypes.file,
      },
      {
        name: 'awdawdwd',
        type: FileSystemItemTypes.file,
      },
    ],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonsComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    service = new CreatingItemService(new ModalWindowService);

    fixture = TestBed.createComponent(ButtonsComponent);
    component = fixture.componentInstance;
    component.data = folder;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call func addFile', function () {
    component.addFile();
    expect(component.data).toBe(folder);
  });

  it('should call func addFolder', function () {
    component.addFolder();
    expect(component.data).toBe(folder);
  });
});
