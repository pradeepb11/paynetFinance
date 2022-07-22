import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helper/guard/auth.guard';
import { BaseComponent } from './view/layout/base/base.component';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./view/pages/auth/auth.module').then(m => m.AuthModule) }, 
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: '',
    component: BaseComponent,
    canActivate: [AuthGuard],
    children:[
      { path: 'dashboard', loadChildren: () => import('./view/pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'addpricing', loadChildren: () => import('./view/pages/finance/addpricing/addpricing.module').then(m => m.AddpricingModule) },
      { path: 'report', loadChildren: () => import('./view/pages/finance/report/report.module').then(m => m.ReportModule) },
      { path: 'merchantvc', loadChildren: () => import('./view/pages/finance/merchantvc/merchantvc.module').then(m => m.MerchantvcModule) },
      { path: 'banklist', loadChildren: () => import('./view/pages/finance/banklist/banklist.module').then(m => m.BanklistModule) },
      { path: 'addprocessor', loadChildren: () => import('./view/pages/it/addprocessor/addprocessor.module').then(m => m.AddprocessorModule) },
    ]
  },
 
  

]

  

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', 
  enableTracing: false, // <-- debugging purposes only
  useHash: true
})
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// useHash: true