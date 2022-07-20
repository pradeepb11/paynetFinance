import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchantvcRoutingModule } from './merchantvc-routing.module';
import { MerchantvcComponent } from './merchantvc.component';


@NgModule({
  declarations: [
    MerchantvcComponent
  ],
  imports: [
    CommonModule,
    MerchantvcRoutingModule
  ]
})
export class MerchantvcModule { }
