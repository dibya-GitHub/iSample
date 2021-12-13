import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './login/login.component';
import { SharedPageRoutingModule } from './shared-routing.module';
import { SharedPage } from './shared.page';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SharedPageRoutingModule],
  declarations: [SharedPage, LoginComponent, SignupComponent],
})
export class SharedPageModule {}
