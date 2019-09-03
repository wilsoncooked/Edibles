import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { User } from '../user.model';

@Component({
  selector: 'auth-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  user$: Observable<User>;

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.user$ = this.authService.user$;
  }

  signIn() {
    this.authService.googleSignin();
  }

  signOut() {
    this.authService.signOut();
  }

}
