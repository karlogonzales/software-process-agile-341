import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataService } from './services/data.service';
import { AuthenticationComponent } from "./auth/authentication.component";
import { LogoutComponent } from "./auth/logout.component";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";
import { AuthService } from "./auth/auth.service";
import { ToastComponent } from './shared/toast/toast.component';
import { StudentComponent } from './student/student.component';

import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart/chart.component';
const routing = RouterModule.forRoot([
    { path: '',      component: StudentComponent },
    { path: 'about', component: AboutComponent },
    { path: 'stats', component: ChartComponent },
    { path: 'home', component: HomeComponent },
    { path: 'auth', component: AuthenticationComponent},
   { path: 'auth/signup', component: SignupComponent },
   { path: 'auth/signin', component: SigninComponent },
   { path: 'auth/logout', component: LogoutComponent }

]);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ToastComponent,
    StudentComponent,
    ChartComponent,
    AuthenticationComponent,
    LogoutComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ChartsModule,
    routing
  ],
  providers: [
    DataService,
    ToastComponent,
    AuthService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
