"use strict";
var router_1 = require("@angular/router");
var authentication_component_1 = require("./auth/authentication.component");
var auth_routes_1 = require("./auth/auth.routes");
var APP_ROUTES = [
    { path: '', redirectTo: '/messages', pathMatch: 'full' },
    { path: 'messages', component: MessagesComponent },
    { path: 'auth', component: authentication_component_1.AuthenticationComponent, children: auth_routes_1.AUTH_ROUTES }
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
