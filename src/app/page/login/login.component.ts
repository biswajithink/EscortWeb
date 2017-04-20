import { Component } from '@angular/core';
import {Router} from '@angular/router';

import * as firebase from 'firebase';

@Component({
    moduleId: module.id,
	selector: 'login',
	templateUrl: 'login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent {

	public email:string;
	public password:string;

	constructor(private router: Router) { }

	goEscortlist(){
		this.router.navigate(['./escortlist']);

	}
}
