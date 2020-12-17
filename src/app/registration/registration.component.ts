import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  roles: any = ['Prograd', 'Mentor', 'HR', 'CEO', 'CTO' , 'Technical Staff'];

  ngOnInit(): void {
    this.form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    role: new FormControl(''),
  });
  }

  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
  }


}
