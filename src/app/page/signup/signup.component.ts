import { Component } from '@angular/core';
import {Router} from '@angular/router';
import * as firebase from 'firebase';

@Component({
    moduleId: module.id,
	selector: 'signup',
	templateUrl: 'signup.component.html',
	styleUrls: ['./signup.component.css']
})

export class SignupComponent {

	constructor(private router: Router) { }

	goLogin(){
		this.router.navigate(['./login']);
	}
	
}
