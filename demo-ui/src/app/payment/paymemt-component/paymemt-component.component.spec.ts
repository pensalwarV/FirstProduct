import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymemtComponentComponent } from './paymemt-component.component';

describe('PaymemtComponentComponent', () => {
  let component: PaymemtComponentComponent;
  let fixture: ComponentFixture<PaymemtComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymemtComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymemtComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
