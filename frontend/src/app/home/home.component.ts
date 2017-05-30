import { Component, OnInit } from '@angular/core';

import { PubService } from '../shared/pub.service';
import { AuthService } from '../shared/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

	isEdit = false;
	isNew = false;
	selectedPub;
	pubList = [];
	constructor(
		private pubService: PubService,
		private authService: AuthService
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
		this.pubService.addPub(professur, jahr, artikel).subscribe(
			res => {
				this.pubList.push(res);
				console.log(res);
				this.sortPubs();
				this.closeNew();
			},
			error => console.log(error)
		);
	}
	
	editPub(id, professur, jahr, artikel) {
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
	
	closeEdit()
	{
		this.isEdit = false;
	}
}
