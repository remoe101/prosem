import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "app/shared/auth.service";



@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
    	private authService: AuthService,
        private router: Router
    ) { }
    
    canActivate() {
        if (this.authService.isLogged())
            return true;
        else
            this.router.navigate(['login',{MessageNotLoggedIn:true}]);
    }
}