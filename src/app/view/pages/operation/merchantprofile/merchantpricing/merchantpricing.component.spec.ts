import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantpricingComponent } from './merchantpricing.component';

describe('MerchantpricingComponent', () => {
  let component: MerchantpricingComponent;
  let fixture: ComponentFixture<MerchantpricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantpricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantpricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
