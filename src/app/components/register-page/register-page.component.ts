import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(public auth: AuthService, public router: Router, public flashMsg: FlashMessagesService) { }

  ngOnInit() {
  }

  onSubmtiAddUser(){
    this.auth.registration(this.email, this.password)
    .then( (res) => {
      this.flashMsg.show('Your registration was done!',
      {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/private']);
    }).catch((err) => {
      this.flashMsg.show(err.message,
        {cssClass: 'alert-danger', timeout: 4000});
      console.log(err)
    })
  }
}
