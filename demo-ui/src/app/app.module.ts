import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from './user/user.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { SearchUserComponent } from './user/search-user/search-user.component';
import { Routes, RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    SearchUserComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    DashboardModule,
    LoginModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
