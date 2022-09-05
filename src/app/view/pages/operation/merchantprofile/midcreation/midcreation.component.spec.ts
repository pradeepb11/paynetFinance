import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidcreationComponent } from './midcreation.component';

describe('MidcreationComponent', () => {
  let component: MidcreationComponent;
  let fixture: ComponentFixture<MidcreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidcreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MidcreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
