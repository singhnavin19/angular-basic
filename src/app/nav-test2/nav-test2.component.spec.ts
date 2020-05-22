import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTest2Component } from './nav-test2.component';

describe('NavTest2Component', () => {
  let component: NavTest2Component;
  let fixture: ComponentFixture<NavTest2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavTest2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
