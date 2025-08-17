import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ApiseriveService } from 'src/app/services/apiserive.service';




@Component({
  selector: 'app-registrationpage',
  templateUrl: './registrationpage.page.html',
  styleUrls: ['./registrationpage.page.scss'],
})
export class RegistrationpagePage implements OnInit {

  userForm!: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private ds:ApiseriveService, private router: Router) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      mobile_number: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      address: ['', Validators.required],
      // image: [],
      pin_code: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
      role: [1]
    });
  }

  onFileChange(event: any): void {
    const file = event.target.files?.[0];
    if (file) {
      this.selectedFile = file;
      console.log('Selected file:', this.selectedFile);
    }
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const formData = {
      ...this.userForm.value,
      image: this.selectedFile
    };

    console.log('Form Data Submitted:', formData);

    // TODO: Send to API or handle logic
    
    this.ds.postUsers(this.userForm.value).subscribe({
      next: res => {
        console.log('User created:', res);
        alert('✅ User created successfully!');
        this.userForm.reset();   
        this.router.navigate(['/login']);
      },
      error: err => {
        console.error('Error:', err);
        alert('❌ Failed to create user. Please check the data.');
      }
    });
    


    this.userForm.reset();
  }
}