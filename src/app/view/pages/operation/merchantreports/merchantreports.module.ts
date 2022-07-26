import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchantreportsRoutingModule } from './merchantreports-routing.module';
import { MerchantreportsComponent } from './merchantreports.component';


@NgModule({
  declarations: [
    MerchantreportsComponent
  ],
  imports: [
    CommonModule,
    MerchantreportsRoutingModule
  ]
})
export class MerchantreportsModule { }
