import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isLogin: boolean;
  public nameUser: string;
  public emailUser: string;
  public publicPhoto: string;
  constructor(
    public auth: AuthService,
    public routet: Router
  ) { }

  ngOnInit() {
    this.auth.getAuth().subscribe( author => {
      if(author){
        this.isLogin = true;
        this.nameUser = author.displayName;
        this.emailUser = author.email;
        this.publicPhoto = author.photoURL;
      } else {
        this.isLogin = false;
      }
    })
  }

  onClickLogout(){
    this.auth.logout();
  }

}
