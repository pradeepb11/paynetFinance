import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdjustmentsComponent } from './adjustments.component';

const routes: Routes = [{ path: '', component: AdjustmentsComponent,  },
{ path: 'activity', loadChildren: () => import('../activity/activity.module').then(m => m.ActivityModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdjustmentsRoutingModule { }
