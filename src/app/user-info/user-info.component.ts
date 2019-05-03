import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
loggedUser:any;
  constructor(
    private router: Router,
    private commonService: CommonServiceService,
  ) {
    this.loggedUser = this.commonService.getLoggedUser();
   }

  ngOnInit() {
  }


  logout(){
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

}
