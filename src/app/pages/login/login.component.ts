import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginErrorMessage:string = '';

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      userName: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  
  checkInvalidForm():boolean {
    return this.loginForm.invalid;
  }

  login():void {
    console.log(this.loginForm);
    
    if (this.checkInvalidForm()) {
      return;
    }
    this.authService.login(this.loginForm.value).subscribe(
      (res) => console.log(res),
      (error) => {
        this.loginErrorMessage = error.message
        console.log(this.loginErrorMessage);
        
      }
    );
    // if (this.authService.isLogged()) {
    //   this.router.navigate(['/dragons']);
    // }
  }

}
