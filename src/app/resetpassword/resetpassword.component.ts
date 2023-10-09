import { AuthenticationService } from './../authentication.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordService } from '../password.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent {
  constructor(private _PasswordService:PasswordService, private _Router:Router,private _AuthenticationService :AuthenticationService){}
  userPassword=new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(16)]);
  userEmail=new FormControl(null,[Validators.required,Validators.email]);
  resetForm = new FormGroup({
    email:this.userEmail,
    newPassword:this.userPassword,
    password:this.userPassword

  });

  reset(form:any){
    this._PasswordService.resetPassword(form.value).subscribe(
      {
        next:(response)=>{console.log(response)
          this._AuthenticationService.login(form.value).subscribe({
          next:(res)=>{console.log(res)
            localStorage.setItem('user',response.token);
            this._Router.navigate(["/home"]);
            this._AuthenticationService.isLogin.next(true);
          }
          
          })
        }
      }
    )
  }
}
