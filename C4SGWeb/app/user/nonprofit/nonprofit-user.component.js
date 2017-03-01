"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var NonprofitUserComponent = (function () {
    function NonprofitUserComponent(fb) {
        this.fb = fb;
        this.myAccount = new forms_1.FormGroup({
            username: new forms_1.FormControl("", forms_1.Validators.required),
            firstName: new forms_1.FormControl("", forms_1.Validators.required),
            lastName: new forms_1.FormControl("", forms_1.Validators.required),
            email: new forms_1.FormControl("", forms_1.Validators.required),
            newPassword: new forms_1.FormControl("", forms_1.Validators.required),
            city: new forms_1.FormControl("", forms_1.Validators.required),
            state: new forms_1.FormControl("", forms_1.Validators.required),
            country: new forms_1.FormControl("", forms_1.Validators.required),
            zip: new forms_1.FormControl("", forms_1.Validators.required),
            confirmPassword: new forms_1.FormControl("", forms_1.Validators.required)
        });
        this.myOrganization = new forms_1.FormGroup({
            organizationName: new forms_1.FormControl("", forms_1.Validators.required),
            website: new forms_1.FormControl("", forms_1.Validators.required),
            email: new forms_1.FormControl("", forms_1.Validators.required),
            phone: new forms_1.FormControl("", forms_1.Validators.required),
            ein: new forms_1.FormControl("", forms_1.Validators.required),
            category: new forms_1.FormControl({ value: "", disabled: true }, forms_1.Validators.required),
            address1: new forms_1.FormControl("", forms_1.Validators.required),
            address2: new forms_1.FormControl("", forms_1.Validators.required),
            city: new forms_1.FormControl("", forms_1.Validators.required),
            state: new forms_1.FormControl({ value: "", disabled: true }, forms_1.Validators.required),
            country: new forms_1.FormControl({ value: "", disabled: true }, forms_1.Validators.required),
            zip: new forms_1.FormControl("", forms_1.Validators.required),
            shortDescription: new forms_1.FormControl(""),
            detailedDescription: new forms_1.FormControl("")
        });
    }
    NonprofitUserComponent.prototype.updateAccount = function (event) {
        var accountData = this.myAccount.value;
        console.log(event);
        console.log(accountData);
    };
    NonprofitUserComponent.prototype.updateOrganization = function (event) {
        var organizationData = this.myOrganization.value;
        console.log(event);
        console.log(organizationData);
    };
    NonprofitUserComponent.prototype.ngOnInit = function () {
    };
    return NonprofitUserComponent;
}());
NonprofitUserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-projects',
        templateUrl: 'nonprofit-user.component.html',
        styleUrls: ['nonprofit-user.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], NonprofitUserComponent);
exports.NonprofitUserComponent = NonprofitUserComponent;
//# sourceMappingURL=nonprofit-user.component.js.map