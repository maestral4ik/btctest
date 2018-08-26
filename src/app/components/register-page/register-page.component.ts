import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit() {
  }

  onSubmtiAddUser(){
    this.auth.registration(this.email, this.password)
    .then( (res) => {
      this.router.navigate(['/private']);
    }).catch((err) => {
      console.log(err)
    })
  }
}
