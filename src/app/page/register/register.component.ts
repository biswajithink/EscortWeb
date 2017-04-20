import { Component } from '@angular/core';
import {Router} from '@angular/router';
import * as firebase from 'firebase';

@Component({
    moduleId: module.id,
	selector: 'register',
	templateUrl: 'register.component.html',
	styleUrls: ['./register.component.css']
})

export class RegisterComponent {
	
	constructor(private router: Router){}
	
	goEscortlist(){
		this.router.navigate(['./escortlist']);
	}
}
