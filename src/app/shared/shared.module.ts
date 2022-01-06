import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoadingComponent } from './loading/loading.component';
import { LoginComponent } from './login/login.component';
import { SharedPageRoutingModule } from './shared-routing.module';
import { SharedPage } from './shared.page';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SharedPageRoutingModule],
  declarations: [SharedPage, LoginComponent, SignupComponent, LoadingComponent, ForgotPasswordComponent, WelcomeScreenComponent],
})
export class SharedPageModule {}
