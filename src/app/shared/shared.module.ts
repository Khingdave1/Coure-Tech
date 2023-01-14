import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { DashboardSidenavComponent } from './components/dashboard-sidenav/dashboard-sidenav.component';
import { GoBackTopComponent } from './components/go-back-top/go-back-top.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';
import { AlertPopupComponent } from './components/alert-popup/alert-popup.component';



@NgModule({
  declarations: [
    DashboardHeaderComponent,
    DashboardSidenavComponent,
    GoBackTopComponent,
    LoaderComponent,
    AlertPopupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    DashboardHeaderComponent,
    DashboardSidenavComponent,
    GoBackTopComponent,
    LoaderComponent,
    AlertPopupComponent
  ]
})
export class SharedModule { }
