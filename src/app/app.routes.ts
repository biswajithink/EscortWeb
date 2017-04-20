import { Routes } from '@angular/router';


import { RegisterComponent } from './page/register/register.component';
import { LoginComponent } from './page/login/login.component';
import { SignupComponent } from './page/signup/signup.component';
import { EscortlistComponent } from './page/escortlist/escortlist.component';

import { SignupRoutes } from './page/signup/index';
import { RegisterRoutes } from './page/register/index';
import { LoginRoutes } from './page/login/index';
import { EscortlistRoutes } from './page/escortlist/index';



export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
    	path: 'login',
    	component: LoginComponent
  	},
    {
    	path: 'register',
    	component: RegisterComponent
  	},
    {
    	path: 'signup',
    	component: SignupComponent
  	},
    {
    	path: 'escortlist',
    	component: EscortlistComponent
  	},
    ...SignupRoutes,
    ...RegisterRoutes,
    ...LoginRoutes,
    ...EscortlistRoutes
    
];