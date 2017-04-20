import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { RegisterComponent } from './page/register/register.component';
import { LoginComponent } from './page/login/login.component';
import { SignupComponent } from './page/signup/signup.component';
import { EscortlistComponent } from './page/escortlist/escortlist.component';


import { LoginModule } from './page/login/login.module';
import { RegisterModule } from './page/register/register.module';
import { SignupModule } from './page/signup/signup.module';
import { EscortlistModule } from './page/escortlist/escortlist.module';

import { AppComponent } from './app.component';

import * as firebase from 'firebase';


// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAj1BwYZrljf9yNy1T6VXfnAeqkgjidsHc",
    authDomain: "escort-f1f38.firebaseapp.com",
    databaseURL: "https://escort-f1f38.firebaseio.com",
    projectId: "escort-f1f38",
    storageBucket: "escort-f1f38.appspot.com",
    messagingSenderId: "946762346037"
  };
  firebase.initializeApp(config);


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    SignupComponent,
    EscortlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    LoginModule,
    RegisterModule,
    SignupModule,
    EscortlistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {   

}
