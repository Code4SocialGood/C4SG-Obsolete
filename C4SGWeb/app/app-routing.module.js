"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var volunteer_project_component_1 = require("./project/volunteer/volunteer-project.component");
var organization_project_component_1 = require("./project/organization/organization-project.component");
var view_project_component_1 = require("./project/view/view-project.component");
var create_component_1 = require("./project/create/create.component");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var contact_component_1 = require("./contact/contact.component");
var login_component_1 = require("./login/login.component");
var forgot_password_component_1 = require("./forgot-password/forgot-password.component");
var reset_password_component_1 = require("./forgot-password/reset-password/reset-password.component");
var registration_component_1 = require("./registration/registration.component");
var volunteer_user_component_1 = require("./user/volunteer/volunteer-user.component");
var nonprofit_user_component_1 = require("./user/nonprofit/nonprofit-user.component");
var c4sg_user_component_1 = require("./user/c4sg/c4sg-user.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'projects', component: organization_project_component_1.OrganizationProjectComponent },
    { path: 'create_project', component: create_component_1.CreateProjectComponent },
    { path: 'view-project/:id', component: view_project_component_1.ViewProjectComponent },
    { path: 'volunteers', component: volunteer_project_component_1.VolunteerProjectComponent },
    { path: 'nonprofits', component: organization_project_component_1.OrganizationProjectComponent },
    { path: 'volunteerUser', component: volunteer_user_component_1.VolunteerUserComponent },
    { path: 'nonprofitUser', component: nonprofit_user_component_1.NonprofitUserComponent },
    { path: 'c4sgUser', component: c4sg_user_component_1.C4SGUserComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'forgot-password', component: forgot_password_component_1.ForgotPasswordComponent },
    { path: 'reset-password', component: reset_password_component_1.ResetPasswordComponent },
    { path: 'register', component: registration_component_1.RegistrationComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map