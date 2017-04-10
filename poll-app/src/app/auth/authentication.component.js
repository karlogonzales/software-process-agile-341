"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AuthenticationComponent = (function () {
    function AuthenticationComponent(authService) {
        this.authService = authService;
    }
    AuthenticationComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    AuthenticationComponent = __decorate([
        core_1.Component({
            selector: 'app-authentication',
            template: "\n        <header class=\"row spacing\">\n            <nav class=\"col-md-8 col-md-offset-2\">\n                <ul class=\"nav nav-tabs\">\n                    <li routerLinkActive=\"active\"><a [routerLink]=\"['signup']\">Signup</a></li>\n                    <li routerLinkActive=\"active\" *ngIf=\"!isLoggedIn()\"><a [routerLink]=\"['signin']\">Signin</a></li>\n                    <li routerLinkActive=\"active\" *ngIf=\"isLoggedIn()\"><a [routerLink]=\"['logout']\">Logout</a></li>\n                </ul>\n            </nav>\n        </header>\n        <div class=\"row spacing\">\n           <router-outlet></router-outlet>\n        </div>\n    "
        })
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());
exports.AuthenticationComponent = AuthenticationComponent;
