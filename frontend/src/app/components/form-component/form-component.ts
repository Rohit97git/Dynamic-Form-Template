import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FormService } from '../../services/form-service';
import { FormModel } from '../../models/field-config.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-component.html',
  styleUrl: './form-component.css',
})
export class FormComponent implements OnInit {
  fields: FormModel[] = [];
  formData: any = {};
  submitted = false;
  showForm = false;
  userName = '';

  today = new Date().toISOString().split('T')[0];

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.formService.getFormFields().subscribe((fields) => {
      this.fields = fields;

      //Initialize FormData keys
      fields.forEach((field) => {
        this.formData[field.model] = field.type === 'checkbox' ? false : '';
      });
    });
  }

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    this.userName = this.formData.name;

    console.log('Form Data:', this.formData);

    //Store Locally
    localStorage.setItem('feedback', JSON.stringify(this.formData));

    //PREPARE/SEND TO SERVER

    this.formService.submitFormFields(this.formData).subscribe({
      next: () => {
        console.log('Saved to db.json');
        this.submitted = true;
        this.showForm = false;

        form.resetForm();
      },
      error: (err) => {
        console.error('Save Failed', err);
      },
    });
  }
}
