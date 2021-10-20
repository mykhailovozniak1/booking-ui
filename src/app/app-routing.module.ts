import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent
} from '@nebular/auth';
import { AuthGuardService } from './booking-system/services/auth.guard';
import { LoginComponent } from './booking-system/components/login/login.component';
import { RegisterComponent } from './booking-system/components/register/register.component';
import { LogoutComponent } from './booking-system/components/logout/logout.component';

export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'logout',
        component: LogoutComponent,
      },
      // {
      //   path: 'request-password',
      //   component: NbRequestPasswordComponent,
      // },
      // {
      //   path: 'reset-password',
      //   component: NbResetPasswordComponent,
      // },
    ],
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full'/*, canActivate: [AuthGuardService]*/ },
  { path: '**', redirectTo: 'pages'/*, canActivate: [AuthGuardService]*/ },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
