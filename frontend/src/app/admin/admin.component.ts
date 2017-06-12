import { Component, OnInit } from '@angular/core';

import { PubService } from '../shared/pub.service';
import { AuthService } from '../shared/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})


export class AdminComponent implements OnInit {

	isEdit = false;
	isNew = false;
	errorArray=[];
	selectedPub;
	pubList = [];
	constructor(
		private pubService: PubService,
		private authService: AuthService,
		private router: Router
	) { }
  
	ngOnInit() {
		this.pubService.getAll().subscribe(
			res => {
				console.log(res);
				this.pubList = res;
				this.sortPubs();
			}
		);
	}
	
	sortPubs(){
	this.pubList.sort((x, y) => {
					if (x.professur > y.professur)
						return 1;
					else
						return -1;
				});
	}

	getOne(id) {
		this.pubService.getOne(id).subscribe(
			res => {
				console.log(res);
				this.isEdit = true;
				this.closeNew();
				this.selectedPub = res;
			}
		);
	}
  
	showNew(){
		this.isNew = true;
		this.closeEdit();
	}

	closeNew(){
		this.isNew = false;
		this.errorArray=[];
	}

	deletePub(id) {
		this.pubService.deletePub(id).subscribe(
			res => {
				this.pubList = this.pubList.filter(pub => pub.id!=id);
				console.log(res);
			},
			error => console.log(error)
		);
	}

	addPub(professur, jahr, artikel) {
		if (this.isValid(professur,jahr,artikel)){
			this.pubService.addPub(professur, jahr, artikel).subscribe(
				res => {
					this.pubList.push(res);
					console.log(res);
					this.sortPubs();
					this.closeNew();
					this.errorArray=[];
				},
				error => 
				{
					console.log(error)
				}
			);
		}
	}
	
	editPub(id, professur, jahr, artikel) {
		if (this.isValid(professur,jahr,artikel)){
			this.pubService.editPub(id, professur, jahr, artikel).subscribe(
				res => {
					this.pubList = this.pubList.filter(pub => pub.id!=id);
					this.pubList.push(res);
					this.sortPubs();
					console.log(res);
					this.closeEdit();
				},
				error => console.log(error)
			);
		}
	}
	
	closeEdit()
	{
		this.isEdit = false;
		this.errorArray=[];
	}

	logout()
	{
		this.authService.logout();
        this.router.navigate(['login',{MessageLogout:true}]);

	}
	
	isValid(professur, jahr, artikel):boolean
	{
		this.errorArray=[];
		if ((jahr<2011 || jahr>2018) && artikel<0) {
			this.errorArray.push("Das Jahr muss zwischen 2011 und 2018 liegen.");
			this.errorArray.push("Es müssen mindestens 0 Artikel sein.");	
		}
		else if (jahr<2011 || jahr>2018)
			this.errorArray.push("Das Jahr muss zwischen 2011 und 2018 liegen.");
		else if (artikel<0)
			this.errorArray.push("Es müssen mindestens 0 Artikel sein.");
		else
			return true;
		return false;		
	}
}
