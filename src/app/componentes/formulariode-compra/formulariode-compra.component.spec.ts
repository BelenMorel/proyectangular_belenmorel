import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariodeCompraComponent } from './formulariode-compra.component';

describe('FormulariodeCompraComponent', () => {
  let component: FormulariodeCompraComponent;
  let fixture: ComponentFixture<FormulariodeCompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulariodeCompraComponent]
    });
    fixture = TestBed.createComponent(FormulariodeCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
