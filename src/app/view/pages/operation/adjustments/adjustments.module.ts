import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdjustmentsRoutingModule } from './adjustments-routing.module';
import { AdjustmentsComponent } from './adjustments.component';

import { NgbDropdownModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FeahterIconModule } from 'src/app/helper/feather-icon/feather-icon.module';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};



@NgModule({
  declarations: [
    AdjustmentsComponent,
  ],
  imports: [
    CommonModule,
    AdjustmentsRoutingModule,
    NgbDropdownModule,
    NgbDatepickerModule,
    FeahterIconModule,
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class AdjustmentsModule { 
  constructor(){
    // console.log('adjustment module')
  }
}
