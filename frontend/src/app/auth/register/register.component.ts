import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerFormGroup: FormGroup;
  
  constructor(private fb: FormBuilder, private service: AuthService) {
    this.registerFormGroup = fb.group({
      username: fb.control(null, Validators.required),
      password: fb.control(null, Validators.required),
      firstName: fb.control(null, Validators.required),
    });
   }

  ngOnInit(): void {
  }

  registerClicked() {
    this.service.register(this.registerFormGroup.value).subscribe((response) => {
      console.log(response)
    })
  }

}
