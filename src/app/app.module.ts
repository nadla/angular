import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MachineComponent } from './component/machine/machine.component';
import { FormsModule } from '@angular/forms';
import { MachineService } from './service/machine.service';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AppRenderComponent } from './app-render/app-render.component';
import { SingleMachineComponent } from './component/single-machine/single-machine.component';
import { ErrorNavigationComponent } from './component/error-navigation/error-navigation.component';

import { AuthGuardService } from './service/auth-guard.service';
import { AuthService } from './service/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    MachineComponent,
    AuthentificationComponent,
    AppRenderComponent,
    SingleMachineComponent,
    ErrorNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    MachineService,
    AuthService,
    AuthGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
