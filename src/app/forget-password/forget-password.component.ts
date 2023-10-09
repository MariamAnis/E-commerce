import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordService } from '../password.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  constructor(private _PasswordService:PasswordService, private _Router:Router){}

  userEmail=new FormControl(null,[Validators.required,Validators.email]);
 PasswordForm = new FormGroup({
    email:this.userEmail,
  });

  forgetPassword(form:any){
    this._PasswordService.forgetPassword(form.value).subscribe(
      {
        next:(response)=>{console.log(response)
          this.reset()
        }
      }
    )

  }
  reset(){
    this._Router.navigate(['/verifypassword'])

  }

}
