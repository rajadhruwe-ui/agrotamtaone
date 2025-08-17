import { Component, OnInit } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logfire',
  templateUrl: './logfire.page.html',
  styleUrls: ['./logfire.page.scss'],
})
export class LogfirePage implements OnInit {
  email: string = '';
  password: string = '';
  constructor() { }

  // private afAuth: AngularFireAuth, private router: Router

  ngOnInit() {
  }
  // async login() {
  //   try {
  //     const user = await this.afAuth.signInWithEmailAndPassword(
  //       this.email,
  //       this.password
  //     );
  //     if (user) {
  //       this.router.navigate(['/home']); // Redirect to your app's home page upon successful login
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     // Handle login errors (e.g., display error message)
  //   }
  // }

}
