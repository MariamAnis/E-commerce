import { Component } from '@angular/core';
import { PasswordService } from '../password.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verifypassword',
  templateUrl: './verifypassword.component.html',
  styleUrls: ['./verifypassword.component.scss']
})
export class VerifypasswordComponent {
  constructor(private _PasswordService:PasswordService,private _Router:Router){}
  userCode=new FormControl(null);
  codeForm = new FormGroup({
    resetCode:this.userCode,
   });

  verify(form:any){
    this._PasswordService.verifyPassword(form.value).subscribe({
      next:(response)=>{console.log(response)
        this._Router.navigate(['/resetpassword'])
      }
    })


  }

}
