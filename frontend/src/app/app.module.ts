import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdInputModule, MdIconModule } from '@angular/material';


import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { PubService } from './shared/pub.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './shared/auth.service';
import { AuthModule } from './shared/auth.module'
import { AuthGuard } from "app/shared/auth.guard";


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
	}
];


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
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
  providers: [PubService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
