import { Component, OnInit } from '@angular/core';
import { ApiseriveService } from 'src/app/services/apiserive.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];
  searchText: string = '';

  constructor(private ds: ApiseriveService) {}

  ngOnInit() {
    this.ds.getUsers().subscribe({
      next: (res) => {
        this.users = res;
        this.filteredUsers = [...this.users]; // Initialize filtered list
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      }
    });
  }

  filterUsers() {
    const text = this.searchText.toLowerCase().trim();
    this.filteredUsers = this.users.filter(user =>
      user.username?.toLowerCase().includes(text) ||
      user.email?.toLowerCase().includes(text)
    );
  }
}
