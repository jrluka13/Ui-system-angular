import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplooyesComponent } from './emplooyes.component';

describe('EmplooyesComponent', () => {
  let component: EmplooyesComponent;
  let fixture: ComponentFixture<EmplooyesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplooyesComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplooyesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
