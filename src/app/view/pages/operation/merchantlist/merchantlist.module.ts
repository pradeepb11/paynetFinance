import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchantlistRoutingModule } from './merchantlist-routing.module';
import { MerchantlistComponent } from './merchantlist.component';


@NgModule({
  declarations: [
    MerchantlistComponent
  ],
  imports: [
    CommonModule,
    MerchantlistRoutingModule
  ]
})
export class MerchantlistModule { }
