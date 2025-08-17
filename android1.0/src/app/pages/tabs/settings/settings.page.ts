import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiseriveService } from 'src/app/services/apiserive.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  userForm: FormGroup;
  userImage: string | null = null; 



 
  constructor(private api_data_service: ApiseriveService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      userEmail: ['', [Validators.required, Validators.email]],
      userFirst_name: [''],
      userLast_namer: [''],
      userMobileNumber: ['', Validators.required],
      userAddress: [''],
      userPinCode: [''],
      userRole: [''],
      userImage: [''],
    });
    
  }


  ngOnInit() {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser') || 'null');
    if (currentUser) {
      console.log('Welcome back,', currentUser.first_name);
  
      this.userForm.patchValue({
        userName: currentUser.username,
        userEmail: currentUser.email,
        userFirst_name: currentUser.first_name,
        userLast_namer: currentUser.last_name,
        userMobileNumber: currentUser.mobile_number,
        userAddress: currentUser.address,
        userPinCode: currentUser.pin_code,
        userRole: currentUser.role,
        // userImage: currentUser.role,
      });
  
      this.userImage = currentUser.image;
    }
  }
  
  

  updateProfile() {
    if (this.userForm.valid) {
      console.log(this.userForm)
    } else {
      console.error('Form is invalid. Please check the inputs.');
    }
  }
  

}
