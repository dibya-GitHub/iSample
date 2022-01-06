import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoadingComponent } from './loading/loading.component';
import { LoginComponent } from './login/login.component';
import { SharedPage } from './shared.page';
import { SignupComponent } from './signup/signup.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

const routes: Routes = [
  {
    path: '',
    component: SharedPage,
  },
  {
    path: 'Login',
    component: LoginComponent,
  },
  {
    path: 'Signup',
    component: SignupComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'welcome',
    component: WelcomeScreenComponent,
  },
  {
    path: 'Loading',
    component: LoadingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedPageRoutingModule {}
