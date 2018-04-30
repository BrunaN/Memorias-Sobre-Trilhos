import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationContentComponent } from './station-content.component';

describe('StationContentComponent', () => {
  let component: StationContentComponent;
  let fixture: ComponentFixture<StationContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
