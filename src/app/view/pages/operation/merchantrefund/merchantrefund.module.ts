import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchantrefundRoutingModule } from './merchantrefund-routing.module';
import { MerchantrefundComponent } from './merchantrefund.component';


@NgModule({
  declarations: [
    MerchantrefundComponent
  ],
  imports: [
    CommonModule,
    MerchantrefundRoutingModule
  ]
})
export class MerchantrefundModule { }
