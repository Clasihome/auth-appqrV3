import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { AuthService } from 'src/app/services/auth.service'; // Asegúrate que esta ruta es correcta

import { LoginPage } from './login.page';
import { LogInComponent } from 'src/app/components/log-in/log-in.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  providers: [AuthService] ,
  declarations: [LoginPage, LogInComponent]
})
export class LoginPageModule {}
