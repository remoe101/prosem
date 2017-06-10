import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  MessageFlag = false;
  LogoutFlag = false;
  constructor(
    	private authService: AuthService,
      private router: Router,
      private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      res => {
        console.log(res);
        if (res.MessageNotLoggedIn)
          this.MessageFlag = true;
        if (res.MessageLogout)
          this.LogoutFlag = true;    
      }
    );
  }

  login(nutzername,passwort)
  {
    	this.authService.login(nutzername,passwort).subscribe(
        res => {
          this.router.navigate(['admin']);
          console.log(res);
        },
        error => console.log(error)
		  );
  }
}
