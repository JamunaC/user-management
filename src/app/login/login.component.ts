import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from '../common-service.service';
import { ToastrService } from "ngx-toastr";
import { EqualValidatorDirective } from '../equal-validator.directive';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel: any = {};
  signUpModel: any = [];
  existModel: any = [];

  constructor(
    private router: Router,
    private commonService: CommonServiceService,
    private toastr: ToastrService
  ) {
    this.resetModel();
    this.signUpModel = this.commonService.getSignedUser();
  }

  ngOnInit() {
  }

  onSubmitLoginForm() {

    this.existModel = this.signUpModel.find(o =>
     (((o.username == this.loginModel.username) || (o.email == this.loginModel.username) || (o.mobileno == this.loginModel.username))) && (o.password = this.loginModel.password)) 
    if(this.existModel) {
      this.commonService.setLoggedUser(this.existModel);
      this.router.navigate(['userinfo']);
      this.toastr.success("Logged in successfully");
    }

  else {
    this.toastr.error("You entered wrong username and passwords");
  }

  }

  signupview() {
    this.router.navigate(['signup'])
  }

  resetModel() {
    this.loginModel = {
      username: '',
      password: ''
    }
  }

}
