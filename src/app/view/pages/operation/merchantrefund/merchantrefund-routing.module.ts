import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MerchantrefundComponent } from './merchantrefund.component';

const routes: Routes = [{ path: '', component: MerchantrefundComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantrefundRoutingModule { }
