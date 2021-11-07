import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioWebComponent } from './formulario-web.component';

describe('FormularioWebComponent', () => {
  let component: FormularioWebComponent;
  let fixture: ComponentFixture<FormularioWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
