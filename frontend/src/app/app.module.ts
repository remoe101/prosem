import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdInputModule, MdIconModule } from '@angular/material';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PubService } from './shared/pub.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './shared/auth.service';
import { AuthModule } from './shared/auth.module'


const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'login',
		component: LoginComponent
	}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
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
	  RouterModule.forRoot(routes)
  ],
  providers: [PubService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
