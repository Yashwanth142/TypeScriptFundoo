import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,private _snackBar: MatSnackBar,private user:UserService) { }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      firstName:['',[Validators.required,Validators.minLength(3)]],
      lastName:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(7)]],
      confirmPassword:['',[Validators.required,Validators.minLength(7)]]
    });
  }

  onSubmit(){
    console.log('inside onSubmit')
    if(this.signupForm.valid){
      console.log("data is vaild",this.signupForm.value)
      let signupData={
        firstname:this.signupForm.value.firstName,
        lastname:this.signupForm.value.lastName,
        email:this.signupForm.value.email,
        password:this.signupForm.value.password,
        confirmpassword:this.signupForm.value.confirmPassword
      }
      this.user.signup(signupData).subscribe(
        (response) => {
          console.log("Sign-up successful", response);
          this._snackBar.open("Registered successfully", "ok", { duration: 3000 });
        },
        (error) => { 
          this._snackBar.open("Error " + error.status + " " + error.statusText, "try again", { duration: 3000 }); });
    }
    else {
      // console.log("Enter valid data");
      this._snackBar.open("Enter valid data", "ok", { duration: 3000 });
    }
    
  }

}
