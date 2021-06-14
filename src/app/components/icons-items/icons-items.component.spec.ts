import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconsItemsComponent } from './icons-items.component';
import { CreatingItemService } from '../../services/creating-item.service';
import { ModalWindowService } from '../../services/modal-window.service';
import { FolderMock } from '../mocks/folder-mock';

describe('IconsItemsComponent', () => {
  let component: IconsItemsComponent;
  let fixture: ComponentFixture<IconsItemsComponent>;
  let service: CreatingItemService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconsItemsComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    service = new CreatingItemService(new ModalWindowService);

    fixture = TestBed.createComponent(IconsItemsComponent);
    component = fixture.componentInstance;
    component.data = FolderMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call func addFile', function () {
    component.addFile();
    expect(component.data).toBe(FolderMock);
  });

  it('should call func addFolder', function () {
    component.addFolder();
    expect(component.data).toBe(FolderMock);
  });
});
