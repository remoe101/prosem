import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdInputModule, MdIconModule } from '@angular/material';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { PubService } from './shared/pub.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './shared/auth.service';
import { AuthModule } from './shared/auth.module'
import { AuthGuard } from "app/shared/auth.guard";
import { HomeComponent } from './home/home.component';
import { AuthHttp, AuthConfig } from "angular2-jwt/angular2-jwt";


const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'admin',
		component: AdminComponent,
    canActivate: [AuthGuard]
	},
	{
		path: 'login',
		component: LoginComponent
	},
  {
		path: 'home',
		component: HomeComponent
	}
];

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    noJwtError: true
  }), http, options);
}



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule, 
    MdInputModule, 
    MdIconModule,
    AuthModule,
    NgxChartsModule,
	  RouterModule.forRoot(routes)
  ],
  providers: [
    PubService, AuthService, AuthGuard,
   {
     provide: AuthHttp,
     useFactory: authHttpServiceFactory,
     deps: [Http, RequestOptions]
   }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
