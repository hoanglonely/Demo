import { Component } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent{
  errorMessage: string;
  pageTitle= "Login!!!";
  constructor(private authService: AuthService,
    private router: Router) { }

  login(loginForm: NgForm){
    if(loginForm && loginForm.valid){
      let userName = loginForm.form.value.userName;
      let password = loginForm.form.value.password;
      console.log(userName + password);
      this.authService.login(userName,password);

      if(this.authService.redirectUrl){
        this.router.navigateByUrl(this.authService.redirectUrl);
      } else{
        this.router.navigate(['/products']);
      }
    }else{
      this.errorMessage = 'Vui lòng nhập tài khoản và mật khẩu';
    }
  }

}
