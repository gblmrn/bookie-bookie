import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginFormGroup: FormGroup;
  
  constructor(private fb: FormBuilder, private service: AuthService) {
    this.loginFormGroup = fb.group({
      username: fb.control(null, Validators.required),
      password: fb.control(null, Validators.required),
    });
   }

  ngOnInit(): void {
  }

  loginClicked() {
    this.service.login(this.loginFormGroup.value).subscribe((response) => {
      console.log(response)
    })
  }

}
