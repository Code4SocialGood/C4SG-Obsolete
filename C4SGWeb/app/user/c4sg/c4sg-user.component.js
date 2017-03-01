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
var C4SGUserComponent = (function () {
    function C4SGUserComponent(fb) {
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
    C4SGUserComponent.prototype.updateAccount = function (event) {
        var accountData = this.myAccount.value;
        console.log(event);
        console.log(accountData);
    };
    C4SGUserComponent.prototype.updateOrganization = function (event) {
        var organizationData = this.myOrganization.value;
        console.log(event);
        console.log(organizationData);
    };
    C4SGUserComponent.prototype.ngOnInit = function () {
    };
    return C4SGUserComponent;
}());
C4SGUserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-projects',
        templateUrl: 'c4sg-user.component.html',
        styleUrls: ['c4sg-user.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], C4SGUserComponent);
exports.C4SGUserComponent = C4SGUserComponent;
//# sourceMappingURL=c4sg-user.component.js.map