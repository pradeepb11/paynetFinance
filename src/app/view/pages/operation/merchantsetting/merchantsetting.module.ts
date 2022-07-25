import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchantsettingRoutingModule } from './merchantsetting-routing.module';
import { MerchantsettingComponent } from './merchantsetting.component';


@NgModule({
  declarations: [
    MerchantsettingComponent
  ],
  imports: [
    CommonModule,
    MerchantsettingRoutingModule
  ]
})
export class MerchantsettingModule { }
