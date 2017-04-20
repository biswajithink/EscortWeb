import { Component } from '@angular/core';
import {Router} from '@angular/router';
import * as firebase from 'firebase';


@Component({
    moduleId: module.id,
	selector: 'escortlist',
	templateUrl: 'escortlist.component.html',
	styleUrls: ['./escortlist.component.css']
})

export class EscortlistComponent {

	constructor(private router: Router) { }

	add(){
		this.router.navigate(['./register']);
	}
	logout(){
		this.router.navigate(['./login']);
	}
	  
}
