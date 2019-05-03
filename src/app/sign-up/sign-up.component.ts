import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from '../common-service.service';
import { ToastrService } from "ngx-toastr";
import { EqualValidatorDirective } from '../equal-validator.directive';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  componentModel: any;
  signUpModel: any = [];
  existModel: any = null;

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


  resetModel() {
    this.componentModel = {
      username: '',
      name: '',
      email: '',
      password: '',
      cnfrmpassword: '',
      mobileno: '',
      address: ''
    }
  }

  onSubmitSignupForm() {
    if (this.signUpModel) {
      this.existModel = this.signUpModel.find(o =>
        ((o.username == this.componentModel.username) || (o.email == this.componentModel.email) || (o.mobileno == this.componentModel.mobileno)));
      if (this.existModel) {
        this.toastr.error("This user already exist");
        // this.resetModel();
      }
      else {
        this.commonService.setSignedUser(this.componentModel);
        this.router.navigate(['login']);
        this.toastr.success("User is added succefully. Please login here");
      }
    }
    else {
      this.commonService.setSignedUser(this.componentModel);
      this.router.navigate(['login']);
      this.toastr.success("User is added succefully. Please login here");
    }

  }

  loginview() {
    this.router.navigate(['login']);
  }

}
