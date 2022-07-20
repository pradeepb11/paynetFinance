import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantvcComponent } from './merchantvc.component';

describe('MerchantvcComponent', () => {
  let component: MerchantvcComponent;
  let fixture: ComponentFixture<MerchantvcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantvcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
