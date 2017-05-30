import { Component, OnInit } from '@angular/core';

import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    	private authService: AuthService
  ) { }

  ngOnInit() {
  }

  login(nutzername,passwort)
  {
    	this.authService.login(nutzername,passwort).subscribe(
			res => {
				console.log(res);
			},
			error => console.log(error)
		);
  }
}
