import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultPagesComponent } from './result-pages.component';

describe('ResultPagesComponent', () => {
  let component: ResultPagesComponent;
  let fixture: ComponentFixture<ResultPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
