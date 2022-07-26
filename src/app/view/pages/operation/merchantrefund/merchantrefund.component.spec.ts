import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantrefundComponent } from './merchantrefund.component';

describe('MerchantrefundComponent', () => {
  let component: MerchantrefundComponent;
  let fixture: ComponentFixture<MerchantrefundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantrefundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantrefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
