import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FileComponent } from './file.component';

describe('FileComponent', () => {
  let component: FileComponent;
  let fixture: ComponentFixture<FileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should set up imageFile', function () {
    let imgFile: string = '../../assets/file.png';

    expect(component.imgFile).toBe(imgFile);
  });
});
