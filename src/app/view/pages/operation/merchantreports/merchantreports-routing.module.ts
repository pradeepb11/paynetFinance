import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MerchantreportsComponent } from './merchantreports.component';

const routes: Routes = [{ path: '', component: MerchantreportsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantreportsRoutingModule { }
