import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataService } from './services/data.service';

import { ToastComponent } from './shared/toast/toast.component';
import { StudentComponent } from './student/student.component';

import { ChartsModule } from 'ng2-charts';
import { BarchartComponent } from './barchart/barchart.component';
const routing = RouterModule.forRoot([
    { path: '',      component: StudentComponent },
    { path: 'about', component: AboutComponent },
    { path: 'stats', component: BarchartComponent },
    { path: 'home', component: HomeComponent }

]);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ToastComponent,
    StudentComponent,
    BarchartComponent
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
    ToastComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
