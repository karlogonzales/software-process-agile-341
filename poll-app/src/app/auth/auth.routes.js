"use strict";
var signup_component_1 = require("./signup.component");
var signin_component_1 = require("./signin.component");
var logout_component_1 = require("./logout.component");
exports.AUTH_ROUTES = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: 'signin', component: signin_component_1.SigninComponent },
    { path: 'logout', component: logout_component_1.LogoutComponent }
];
