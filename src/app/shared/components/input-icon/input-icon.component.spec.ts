import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputIconComponent } from './input-fa-icon.component';

describe('InputFaIconComponent', () => {
  let component: InputIconComponent;
  let fixture: ComponentFixture<InputIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
