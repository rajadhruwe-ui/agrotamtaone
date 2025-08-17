import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  accounts: any[]=[];

  constructor() { }

  ngOnInit() {
    this.accounts = [
      { id: 1, acc_no: '57868945098', balance: '200000' },
      { id: 2, acc_no: '20067091201', balance: '50000' },
      { id: 3, acc_no: '40163081205', balance: '80000' }
    ];
  }

}
