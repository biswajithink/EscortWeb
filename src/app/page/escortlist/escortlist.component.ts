
import { Component, Pipe, PipeTransform } from '@angular/core';
import {Router} from '@angular/router';
//declare var $: any;

import * as firebase from 'firebase';

import {FilterPipe} from '../../filter.pipe';

@Component({
    moduleId: module.id,
	selector: 'escortlist',
	templateUrl: 'escortlist.component.html',
	styleUrls: ['./escortlist.component.css']
})

export class EscortlistComponent {

public escortlist:any;
public filterItem:any;

	constructor(private router: Router) {


		this.escortlist=[
			{
				name: "Lorem Ipsum",
				age : "34 Years",
				mobile: "8888888888",
				service: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
						`,
				thumb: "assets/images/person-icon.png",
				country: "Angola",
				city: "Luanda"
			},
			{
				name: "Diet Ipsum",
				age : "28 Years",
				mobile: "6666666666",
				service: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
				thumb: "assets/images/person-icon.png",
				country: "Belgium",
				city: "Brussels"
			}
		];

		this.filterItem=[
				{
					id:"1",
					name: "Country"
				},
				{
					id:'2',
					name: "City"
				},
				{
					id:'3',
					name: "Age"
				},
				{
					id:'4',
					name: "Service"
				}
			]			
	 }

	add(){
		this.router.navigate(['./register']);
	}
	logout(){
		this.router.navigate(['./login']);
	}

	optionName(){
		alert('hi');
	}



country() {
		// Declare variables 
		var con, filter, ul, li, span, i;
		con = document.getElementById("con");
		filter = con.value.toUpperCase();
		ul = document.getElementById("myTable");
		li = ul.getElementsByTagName("li");

		// Loop through all table rows, and hide those who don't match the search query
		for (i = 0; i < li.length; i++) {
			span = li[i].getElementsByTagName("span")[2];
			if (span) {
			if (span.innerHTML.toUpperCase().indexOf(filter) > -1) {
				li[i].style.display = "";
			} else {
				li[i].style.display = "none";
			}
			} 
		}
	}
city() {
		// Declare variables 
		var cit, filter, ul, li, span, i;
		cit = document.getElementById("cit");
		filter = cit.value.toUpperCase();
		ul = document.getElementById("myTable");
		li = ul.getElementsByTagName("li");

		// Loop through all table rows, and hide those who don't match the search query
		for (i = 0; i < li.length; i++) {
			span = li[i].getElementsByTagName("span")[3];
			if (span) {
			if (span.innerHTML.toUpperCase().indexOf(filter) > -1) {
				li[i].style.display = "";
			} else {
				li[i].style.display = "none";
			}
			} 
		}
	}
age() {
		// Declare variables 
		var age, filter, ul, li, span, i;
		age = document.getElementById("age");
		filter = age.value.toUpperCase();
		ul = document.getElementById("myTable");
		li = ul.getElementsByTagName("li");

		// Loop through all table rows, and hide those who don't match the search query
		for (i = 0; i < li.length; i++) {
			span = li[i].getElementsByTagName("span")[1];
			if (span) {
			if (span.innerHTML.toUpperCase().indexOf(filter) > -1) {
				li[i].style.display = "";
			} else {
				li[i].style.display = "none";
			}
			} 
		}
	}
service() {
		// Declare variables 
		var ser, filter, ul, li, span, i;
		ser = document.getElementById("ser");
		filter = ser.value.toUpperCase();
		ul = document.getElementById("myTable");
		li = ul.getElementsByTagName("li");

		// Loop through all table rows, and hide those who don't match the search query
		for (i = 0; i < li.length; i++) {
			span = li[i].getElementsByTagName("span")[5];
			if (span) {
			if (span.innerHTML.toUpperCase().indexOf(filter) > -1) {
				li[i].style.display = "";
			} else {
				li[i].style.display = "none";
			}
			} 
		}
	}
	
	category:any='';
    anything:any;
	onItemChange(){
     	console.log(this.category); //Here I want the changed value
		if(this.category=='1'){
		document.getElementById("con").style.display='block';
		document.getElementById("cit").style.display='none';
		document.getElementById("age").style.display='none';
		document.getElementById("ser").style.display='none';
		}

		else if(this.category=='2'){
		document.getElementById("con").style.display='none';
		document.getElementById("cit").style.display='block';
		document.getElementById("age").style.display='none';
		document.getElementById("ser").style.display='none';
			
		}

		else if(this.category=='3'){

		document.getElementById("con").style.display='none';
		document.getElementById("cit").style.display='none';
		document.getElementById("age").style.display='block';
		document.getElementById("ser").style.display='none';
		}

		else if(this.category=='4'){

		document.getElementById("con").style.display='none';
		document.getElementById("cit").style.display='none';
		document.getElementById("age").style.display='none';
		document.getElementById("ser").style.display='block';
	}
		
  }
	  
}
