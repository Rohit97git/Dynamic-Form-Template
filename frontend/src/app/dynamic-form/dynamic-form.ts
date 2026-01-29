import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './dynamic-form.html',
  styleUrl: './dynamic-form.css',
})
export class DynamicForm {
  loginForm;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.min(5)],
    });
  }

  submit() {
    console.log(this.loginForm.value);
  }
}
