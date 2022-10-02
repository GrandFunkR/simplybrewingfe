import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbAuthComponent, NbRegisterComponent } from '@nebular/auth';

import { NgxLoginComponent } from './login/login.component'; // <---
import { NgxLogoutComponent } from './logout/logout.component';

export const routes: Routes = [
  {
    path: '',
    component: NbAuthComponent,
    children: [
      {
        path: 'login',
        component: NgxLoginComponent, // <---
      },
      {
        path: 'logout',
        component: NgxLogoutComponent, // <---
      },
      {
        path: 'sign-up',
        component: NbRegisterComponent, // <---
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxAuthRoutingModule {
}
