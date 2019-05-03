import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  private signedUser: any;
  private loggedUser:any = null;
  signedUserAray:any=[];

  constructor() { }

  getSignedUser() {
    if (!this.signedUser && localStorage.getItem("signedUser")) {
      this.signedUser = JSON.parse(localStorage.getItem("signedUser"));
    }

    return this.signedUser;
  }

  setSignedUser(sData) {
    if (sData) {
      this.signedUserAray.push(sData);
      localStorage.setItem("signedUser", JSON.stringify(this.signedUserAray));
    } else {
      localStorage.removeItem("signedUser");
    }
  }

  getLoggedUser() {
    if (!this.loggedUser && sessionStorage.getItem("loggedUser")) {
      this.loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"));
    }

    return this.loggedUser;
  }

  setLoggedUser(sData) {
    if (sData) {
      sessionStorage.setItem("loggedUser", JSON.stringify(sData));
    } else {
      sessionStorage.removeItem("loggedUser");
    }
  }

 
}
