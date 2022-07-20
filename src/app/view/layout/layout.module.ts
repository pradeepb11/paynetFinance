import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { RouterModule } from '@angular/router';
import { NgbDropdownModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { FeahterIconModule } from 'src/app/helper/feather-icon/feather-icon.module';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ContentAnimateDirective } from 'src/app/helper/content-animate/content-animate.directive';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  declarations: [
    BaseComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ContentAnimateDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbCollapseModule,
    NgbDropdownModule,
    PerfectScrollbarModule,
    FeahterIconModule
  ],
  providers:[
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class LayoutModule { }
