import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentication/auth/auth.guard';
import { LoginComponent } from './authentication/login/login.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';

const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'register',
    component:RegistrationComponent
  },
  {
    path: '',
    component:DefaultLayoutComponent,
    loadChildren: () => import('./layouts/layouts.module').then(m => m.LayoutsModule),canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
