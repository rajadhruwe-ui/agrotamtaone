import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  addForm!: FormGroup;
  selectedFile: File | null = null;
  fileError = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.addForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.fileError = false;
    } else {
      this.selectedFile = null;
      this.fileError = true;
    }
  }

  submitForm() {
    if (this.addForm.valid && this.selectedFile) {
      const formValues = this.addForm.value;

      const formData = new FormData();
      formData.append('name', formValues.name);
      formData.append('email', formValues.email);
      formData.append('phone', formValues.phone);
      formData.append('image', this.selectedFile);

      console.log('FormData to submit:', formData);

      // TODO: Send formData to backend with HttpClient
      

    } else {
      this.fileError = !this.selectedFile;
      this.addForm.markAllAsTouched();
    }
  }
}
