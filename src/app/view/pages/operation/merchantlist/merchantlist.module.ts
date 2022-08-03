import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchantlistRoutingModule } from './merchantlist-routing.module';
import { MerchantlistComponent } from './merchantlist.component';

import { NgbDropdownModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FeahterIconModule } from 'src/app/helper/feather-icon/feather-icon.module';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};



@NgModule({
  declarations: [
    MerchantlistComponent
  ],
  imports: [
    CommonModule,
    MerchantlistRoutingModule,
    NgbDropdownModule,
    NgbDatepickerModule,
    FeahterIconModule,
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers:[
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class MerchantlistModule { }
