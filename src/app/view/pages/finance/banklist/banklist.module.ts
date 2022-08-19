import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BanklistRoutingModule } from './banklist-routing.module';
import { BanklistComponent } from './banklist.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BanklistComponent
  ],
  imports: [
    CommonModule,
    BanklistRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BanklistModule { }
