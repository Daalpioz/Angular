import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolaVatosComponent } from './hola-vatos.component';

describe('HolaVatosComponent', () => {
  let component: HolaVatosComponent;
  let fixture: ComponentFixture<HolaVatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolaVatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolaVatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
