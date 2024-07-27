import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  users: any[] = [];
  totalItems: number = 0;
  limit: number = 5;
  skip: number = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    const url = `https://dummyjson.com/users?limit=${this.limit}&skip=${this.skip}`;
    this.http.get<any>(url).subscribe(data => {
      this.users = data.users;
      this.totalItems = data.total;
    });
  }

  onPageChange(newPage: number): void {
    this.skip = (newPage - 1) * this.limit;
    this.fetchUsers();
  }

  getPages(): number[] {
    const totalPages = Math.ceil(this.totalItems / this.limit);
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
}
