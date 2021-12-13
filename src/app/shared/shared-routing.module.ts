import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SharedPage } from './shared.page';
import { SignupComponent } from './signup/signup.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedPageRoutingModule {}
