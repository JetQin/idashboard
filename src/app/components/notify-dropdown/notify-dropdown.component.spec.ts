import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyDropdownComponent } from './notify-dropdown.component';

describe('NotifyDropdownComponent', () => {
  let component: NotifyDropdownComponent;
  let fixture: ComponentFixture<NotifyDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifyDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifyDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
