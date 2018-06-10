import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationsMapComponent } from './stations-map.component';

describe('StationsMapComponent', () => {
  let component: StationsMapComponent;
  let fixture: ComponentFixture<StationsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationsMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
