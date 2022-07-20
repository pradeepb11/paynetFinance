import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BanklistRoutingModule } from './banklist-routing.module';
import { BanklistComponent } from './banklist.component';


@NgModule({
  declarations: [
    BanklistComponent
  ],
  imports: [
    CommonModule,
    BanklistRoutingModule
  ]
})
export class BanklistModule { }
