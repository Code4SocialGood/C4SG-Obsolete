"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
require("./rxjs-extensions");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var navscroll_directive_1 = require("./navscroll.directive");
var angular2_materialize_1 = require("angular2-materialize");
// Home
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
// Project
var volunteer_project_component_1 = require("./project/volunteer/volunteer-project.component");
var organization_project_component_1 = require("./project/organization/organization-project.component");
var view_project_component_1 = require("./project/view/view-project.component");
var search_project_component_1 = require("./project/search/search-project.component");
var create_component_1 = require("./project/create/create.component");
var project_service_1 = require("./project/project.service");
var about_component_1 = require("./about/about.component");
var contact_component_1 = require("./contact/contact.component");
var login_component_1 = require("./login/login.component");
var forgot_password_component_1 = require("./forgot-password/forgot-password.component");
var reset_password_component_1 = require("./forgot-password/reset-password/reset-password.component");
var registration_component_1 = require("./registration/registration.component");
// Dashboard
var volunteer_user_component_1 = require("./user/volunteer/volunteer-user.component");
var nonprofit_user_component_1 = require("./user/nonprofit/nonprofit-user.component");
var c4sg_user_component_1 = require("./user/c4sg/c4sg-user.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            navscroll_directive_1.NavScrollDirective,
            home_component_1.HomeComponent,
            about_component_1.AboutComponent,
            contact_component_1.ContactComponent,
            login_component_1.LoginComponent,
            forgot_password_component_1.ForgotPasswordComponent,
            reset_password_component_1.ResetPasswordComponent,
            registration_component_1.RegistrationComponent,
            volunteer_project_component_1.VolunteerProjectComponent,
            organization_project_component_1.OrganizationProjectComponent,
            view_project_component_1.ViewProjectComponent,
            search_project_component_1.SearchProjectComponent,
            angular2_materialize_1.MaterializeDirective,
            create_component_1.CreateProjectComponent,
            volunteer_user_component_1.VolunteerUserComponent,
            nonprofit_user_component_1.NonprofitUserComponent,
            c4sg_user_component_1.C4SGUserComponent,
        ],
        providers: [project_service_1.ProjectService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map