import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {TodosComponent} from './components/todos/todos.component';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';


import { CustomMaterialModule } from './material.module';
import { UserComponent } from './components/user/user.component';
import { UserService } from './components/user/user.service';
import { RegisterComponent } from './components/register/register.component';
import { CookieService } from './cookieservice.service';


@NgModule({
  declarations: [ AppComponent, TodosComponent,  HomeComponent, LoginComponent,
                  UserComponent, RegisterComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    CustomMaterialModule
  ],
  providers: [UserService, CookieService],
  bootstrap:    [  AppComponent ]
})
export class AppModule { }
