import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthHttp } from "angular2-jwt/angular2-jwt";

@Injectable()
export class PubService {

	baseUrl = 'http://localhost:8000/veroeffentlichungen/'
	constructor(
		private http: AuthHttp,
	) { }

  
	getAll(){
		return this.http.get(this.baseUrl).map(res => res.json());
	}

	getOne(id){
		return this.http.get(this.baseUrl+id+"/").map(res => res.json());
	}
	
	deletePub (id) {
		return this.http.delete(this.baseUrl+id+"/").map(res => res.json());
	}
	
	addPub (professur, jahr, artikel) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(
			this.baseUrl, 
			JSON.stringify({ professur: professur, jahr: jahr, artikel: artikel}), 
			{headers:headers}
			).map(res => res.json());
	}
	
	editPub(id, professur, jahr, artikel) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.put(
			this.baseUrl+id+"/", 
			JSON.stringify({ id: id, professur: professur, jahr: jahr, artikel: artikel}), 
			{headers:headers}
			).map(res => res.json());	
	}
}
