import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddprocessorComponent } from './addprocessor.component';

const routes: Routes = [{ path: '', component: AddprocessorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddprocessorRoutingModule { }
