import { SonhoAzulComponent } from './sonho-azul.component';


import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('SonhoAzulComponent', () => {
  let component: SonhoAzulComponent;
  let fixture: ComponentFixture<SonhoAzulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonhoAzulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonhoAzulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
