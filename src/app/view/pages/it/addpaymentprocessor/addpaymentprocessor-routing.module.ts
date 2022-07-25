import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpaymentprocessorComponent } from './addpaymentprocessor.component';

const routes: Routes = [{ path: '', component: AddpaymentprocessorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddpaymentprocessorRoutingModule { }
