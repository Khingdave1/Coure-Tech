import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminOverviewComponent } from './components/admin-overview/admin-overview.component';
import { DisplayAdminSchoolsComponent } from './components/admin-schools/display-admin-schools/display-admin-schools.component';
import { DisplayAdminStudentsComponent } from './components/admin-students/display-admin-students/display-admin-students.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: AdminOverviewComponent,
        data: {
          title: 'Overview',
          description: 'Description Meta Tag Content',
        },
      },
      {
        path: 'students',
        component: DisplayAdminStudentsComponent,
        data: {
          title: 'Students',
          description: 'Description Meta Tag Content',
        },
      },
      {
        path: 'schools',
        component: DisplayAdminSchoolsComponent,
        data: {
          title: 'Schools',
          description: 'Description Meta Tag Content',
        },
      },
      // {
      //   path: 'departments',
      //   component: DisplayAdminSchoolsComponent,
      //   data: {
      //     title: 'Departments',
      //     description: 'Description Meta Tag Content',
      //   },
      // },
      { path: '', redirectTo: '/admin', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
