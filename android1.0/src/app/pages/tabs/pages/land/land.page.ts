import { Component, OnInit } from '@angular/core';
import { ApiseriveService } from 'src/app/services/apiserive.service';

@Component({
  selector: 'app-land',
  templateUrl: './land.page.html',
  styleUrls: ['./land.page.scss'],
})
export class LandPage implements OnInit {
  lands: any[] = [];
  filteredLands: any[] = [];
  searchText: string = '';

  constructor(private ds: ApiseriveService) {}

  ngOnInit() {
    this.ds.getLands().subscribe({
      next: (res) => {
        this.lands = res;
        this.filteredLands = [...this.lands];
      },
      error: (err) => {
        console.error('Error fetching lands:', err);
      }
    });
  }

  filterLands() {
    const text = this.searchText.toLowerCase().trim();
    this.filteredLands = this.lands.filter(land =>
      land.area_name.toLowerCase().includes(text) ||
      land.location.toLowerCase().includes(text) ||
      (land.nick_name?.toLowerCase() || '').includes(text)
    );
  }
}
