import  { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
angular.module('angularRecaptcha',['vcRecaptcha'])

@Component({
	moduleId: module.id,
	selector: 'my-registration',
	templateUrl: 'registration.component.html',
	styleUrls: [ 'registration.component.css' ]
})

export class RegistrationComponent {
	constructor(public fb: FormBuilder) {}
	public signUpForm = this.fb.group({
		username: ["", Validators.required],
        email: ["", Validators.required],
        password: ["", Validators.required],
        rpassword: ["", Validators.required]

	})

	doSignUp(event) {
		console.log(event);
		console.log(this.signUpForm.value)
	}
}

(function(){
    angular.module('angularRecaptcha',[])
    
    .controller('recapCtrl',['vcRecaptchaService','$http',function(vcRecaptchaService,$http){
        var vm = this;
        vm.publicKey = "----YOUR------SITE--------KEY---";
        
       vm.signup = function(){
            
            /* vcRecaptchaService.getResponse() gives you the g-captcha-response */
            
            if(vcRecaptchaService.getResponse() === ""){ //if string is empty
                alert("Please resolve the captcha and submit!")
            }else {
                var post_data = {  //prepare payload for request
                    'name':vm.name,
                    'email':vm.email,
                    'password':vm.password,
                    'g-recaptcha-response':vcRecaptchaService.getResponse()  //send g-captcah-response to our server
                }
                
                
/* MAKE AJAX REQUEST to our server with g-captcha-string */
                $http.post('https://code.ciphertrick.com/demo/phpapi/api/signup',post_data).success(function(response){
                    if(response.error === 0){
                        alert("Successfully verified and signed up the user");
                    }else{
                        alert("User verification failed");
                    }
                })
                .error(function(error){
                
                })
            }
        }
    }])
})()




