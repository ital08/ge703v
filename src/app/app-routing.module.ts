import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', loadChildren: () => import('./login/login.module').then(a => a.LoginModule) }

    ]

  }, {
    path: 'classroom',
    children: [
      { path: '', loadChildren: () => import('./classroom/classroom.module').then(a => a.ClassroomModule) },
      { path: '**', pathMatch: 'full',  redirectTo: '' }
    ]
  },
  { path: '**', pathMatch: 'full',  redirectTo: '' }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
