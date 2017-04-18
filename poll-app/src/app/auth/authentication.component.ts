import {Component} from "@angular/core";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-authentication',
  template: `
        <div class="card-block text-xs-center">
        
        <div class="btn-group" role="group" aria-label="Basic example">
             <a [routerLink]="['signup']"><button type="button" class="btn btn-secondary" routerLinkActive="active" *ngIf="!isLoggedIn()">Signup</button></a>
             <a [routerLink]="['signin']"><button type="button" class="btn btn-secondary" routerLinkActive="active" *ngIf="!isLoggedIn()">Signin</button></a>
             <a [routerLink]="['logout']"><button type="button" class="btn btn-secondary"routerLinkActive="active" *ngIf="isLoggedIn()">Logout</button></a>
        </div>
            <!--nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-tabs">
                    <li routerLinkActive="active" *ngIf="!isLoggedIn()"><a [routerLink]="['signup']">Signup</a></li>
                    <li routerLinkActive="active" *ngIf="!isLoggedIn()"><a [routerLink]="['signin']">Signin</a></li>
                    <li routerLinkActive="active" *ngIf="isLoggedIn()"><a [routerLink]="['logout']">Logout</a></li>
                </ul>
            </nav-->
        </div>
        <div class="card-block text-xs-center">
           <router-outlet></router-outlet>
        </div>
    `
})
export class AuthenticationComponent {
  constructor(private authService: AuthService) {
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
