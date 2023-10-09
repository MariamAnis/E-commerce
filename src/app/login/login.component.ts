import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _AuthenticationService:AuthenticationService, private _Router:Router){}
  isLoading:boolean=false;
  errorMessage:String="";
  user="user";
  userPassword=new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(16)]);
  userEmail=new FormControl(null,[Validators.required,Validators.email]);
  loginForm = new FormGroup({
    email:this.userEmail,
    password:this.userPassword,

  });
login(form:any){
  if(form.valid){
    this.isLoading=true;
    this._AuthenticationService.login(form.value).subscribe({
      next:(response)=>{console.log(response)
        localStorage.setItem(this.user,response.token);
        this.isLoading=false;
        this._Router.navigate(["/home"]);
        this._AuthenticationService.isLogin.next(true);
       
       
      },
      error:(error)=>{
        this.errorMessage=error.error.message;
        this.isLoading=false;
      }
    })

  }


}

forgetPassword(){
  this._Router.navigate(["/forgetpassword"]);
}
}
