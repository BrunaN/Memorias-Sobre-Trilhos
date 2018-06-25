import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComofuncionaComponent } from './comofunciona.component';

describe('ComofuncionaComponent', () => {
  let component: ComofuncionaComponent;
  let fixture: ComponentFixture<ComofuncionaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComofuncionaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComofuncionaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
