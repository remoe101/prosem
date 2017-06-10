import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from "angular2-jwt/angular2-jwt";


@Injectable()
export class AuthService {

	baseUrl = 'http://localhost:8000/api-token-auth/'

  private headers = new Headers();
  private token;
  private tokenName = "token";
  constructor(private http: Http) {
    	this.headers.append('Content-Type', 'application/json');
   }
	
  login(nutzername,passwort){
		return this.http.post(
      this.baseUrl, 
      JSON.stringify({username: nutzername, password: passwort}), 
			{headers:this.headers})
      .map((res: any) => {
        const body = res.json();
        if (body.token) {
          localStorage.setItem(this.tokenName, body.token)
          this.token = body.token;
        }
        return body;
      });
  }

  isLogged(){
    return tokenNotExpired(this.tokenName);
  }

  logout(){
    localStorage.removeItem(this.tokenName);
  }

}
