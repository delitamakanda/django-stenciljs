import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPhotoComponent } from './new-photo.component';

describe('NewPhotoComponent', () => {
  let component: NewPhotoComponent;
  let fixture: ComponentFixture<NewPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
