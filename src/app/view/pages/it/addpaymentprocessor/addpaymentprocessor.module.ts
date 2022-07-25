import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddpaymentprocessorRoutingModule } from './addpaymentprocessor-routing.module';
import { AddpaymentprocessorComponent } from './addpaymentprocessor.component';
import { NgbDropdownModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FeahterIconModule } from 'src/app/helper/feather-icon/feather-icon.module';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AddpaymentprocessorComponent
  ],
  imports: [
    CommonModule,
    AddpaymentprocessorRoutingModule,
    NgbDropdownModule,
    NgbDatepickerModule,
    FeahterIconModule,
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class AddpaymentprocessorModule { }
