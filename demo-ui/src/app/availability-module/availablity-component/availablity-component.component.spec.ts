import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablityComponentComponent } from './availablity-component.component';

describe('AvailablityComponentComponent', () => {
  let component: AvailablityComponentComponent;
  let fixture: ComponentFixture<AvailablityComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailablityComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailablityComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
