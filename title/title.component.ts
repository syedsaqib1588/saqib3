import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  title: string = 'User Management Dashboard';

  constructor() { }

  ngOnInit(): void {
    // Any initialization logic can be added here
  }
}
