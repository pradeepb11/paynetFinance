import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantsettingComponent } from './merchantsetting.component';

describe('MerchantsettingComponent', () => {
  let component: MerchantsettingComponent;
  let fixture: ComponentFixture<MerchantsettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantsettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
