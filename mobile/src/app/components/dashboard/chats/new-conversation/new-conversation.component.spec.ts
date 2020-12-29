import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConversationComponent } from './new-conversation.component';

describe('NewConversationComponent', () => {
  let component: NewConversationComponent;
  let fixture: ComponentFixture<NewConversationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewConversationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
