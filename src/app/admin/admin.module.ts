import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DisplayAdminStudentsComponent } from './components/admin-students/display-admin-students/display-admin-students.component';
import { AdminOverviewComponent } from './components/admin-overview/admin-overview.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { AddAdminStudentsComponent } from './components/admin-students/add-admin-students/add-admin-students.component';
import { EditAdminStudentsComponent } from './components/admin-students/edit-admin-students/edit-admin-students.component';


@NgModule({
  declarations: [
    AdminComponent,
    DisplayAdminStudentsComponent,
    AdminOverviewComponent,
    AddAdminStudentsComponent,
    EditAdminStudentsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    TableModule,
    PaginatorModule,
    SplitButtonModule,
    ConfirmPopupModule,
    DropdownModule,
    CascadeSelectModule,
    ConfirmDialogModule,
    ToastModule,
  ],
  providers: [MessageService, ConfirmationService],
})
export class AdminModule { }
