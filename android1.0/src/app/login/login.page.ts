import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiseriveService } from '../services/apiserive.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;
  constructor(private alertController: AlertController,private fb:FormBuilder, private router: Router, private ds:ApiseriveService) { }
 

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['anil@gmail.com', Validators.required],
      password: ['hashed_password123', Validators.required]
    })
  } 

  
  // new 
  login() {      
    console.log(this.loginForm.value)
    if (this.loginForm.invalid) {
      console.warn('Form is invalid');
      return;
    }
    this.ds.Login(this.loginForm.value).subscribe({
      next: (res) => {
        // 1️⃣ Save the whole response (or just the user) in sessionStorage
        sessionStorage.setItem('currentUser', JSON.stringify(res.user));
        // optional: save token if your API returns one
        // sessionStorage.setItem('authToken', res.token);
  
        alert('Login successful');
        console.log('Logged in user:', res.user);
  
        // 2️⃣ Navigate to home
        this.router.navigate(['/tabs/home']);
     
      },
      error: (err) => {
        console.error('Login error:', err);
        if (err.status === 401 || err.status === 400) {
          alert('Invalid username or password.');
        } else {
          alert('Something went wrong. Please try again later.');
        }
      }
    });
  }
  // new 
  }




