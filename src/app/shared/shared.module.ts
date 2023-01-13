import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { DashboardSidenavComponent } from './components/dashboard-sidenav/dashboard-sidenav.component';
import { GoBackTopComponent } from './components/go-back-top/go-back-top.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardHeaderComponent,
    DashboardSidenavComponent,
    GoBackTopComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    DashboardHeaderComponent,
    DashboardSidenavComponent,
    GoBackTopComponent
  ]
})
export class SharedModule { }
