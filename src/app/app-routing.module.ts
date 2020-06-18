import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { NeedAuthGuard } from './need-auth.guard';
import { LoginPgGuardGuard } from './login-pg-guard.guard';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    canActivate: [NeedAuthGuard] // <---- connected Route with guard
  },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [LoginPgGuardGuard] // <---- connected Route with guard

  },
  {
    path: 'contactus',
    component: ContactusComponent,
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
