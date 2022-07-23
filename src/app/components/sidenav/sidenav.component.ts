import { Component, OnInit } from '@angular/core';
import { Navigation } from 'src/app/models/navigation.models';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  navigationList: Navigation[];

  constructor() {
    this.navigationList = [
      {
        name: 'basic test',
        path: 'basic'
      },
      {
        name: 'intermediate test',
        path: 'intermediate'
      },
      {
        name: 'advance test',
        path: 'advance'
      },
      {
        name: 'your statistics',
        path: 'statistics'
      },
      {
        name: 'about us',
        path: 'aboutUs'
      }

    ]
  }

  ngOnInit(): void {
  }

}
