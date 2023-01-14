import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  hide: boolean = true
  alertMessage: string = 'Click Login to continue!';
  alertColor: string = 'warning';
  isAlert: boolean = true;

}
