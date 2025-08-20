import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-farm-registration',
  templateUrl: './farm-registration.page.html',
  styleUrls: ['./farm-registration.page.scss'],
})
export class FarmRegistrationPage {
  farm = {
    name: '',
    location: '',
    size: '',
    crop_type: ''
  };

  constructor(private http: HttpClient) {}

  registerFarm() {
    this.http.post('http://44.202.101.167:80/api/farms/', this.farm).subscribe({
      next: (res) => {
        console.log('Farm registered:', res);
        alert('Farm registered successfully!');
      },
      error: (err) => {
        console.error(err);
        alert('Farm registration failed.');
      }
    });
  }
}
