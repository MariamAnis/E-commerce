import { Component } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  isLoading:boolean = false;
  errorMessage:String="";

constructor(private _AuthenticationService :AuthenticationService, private _Router :Router){}
  userName=new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]);
  userPassword=new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(16)]);
  userRePassword=new FormControl();
  userPhone=new FormControl(null,[Validators.required,Validators.pattern(/^01[2150][0-9]{8}$/)]);
  userEmail=new FormControl(null,[Validators.required,Validators.email]);
  registerForm = new FormGroup({
    name:this.userName,
    email:this.userEmail,
    password:this.userPassword,
    rePassword:this.userRePassword,
    phone:this.userPhone

  });


 signUp(form:any){
  this.isLoading=true
  if(form.valid &&
     form.get('password').value === form.get('rePassword').value){
    this._AuthenticationService.register(form.value).subscribe({
      next: (response)=>{console.log(response);
        this.isLoading=false;
        this._Router.navigate(['/login'])
        
      },
      error: (error)=>{console.log(error);
        this.errorMessage=error.error.message;
        this.isLoading=false;
      }
    })

  }
 }
}
