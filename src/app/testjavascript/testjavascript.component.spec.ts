import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestjavascriptComponent } from './testjavascript.component';

describe('TestjavascriptComponent', () => {
  let component: TestjavascriptComponent;
  let fixture: ComponentFixture<TestjavascriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestjavascriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestjavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
