import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  isSidebarCollapse = false;
  isOnMobileView = true;
  isSidebarOpen = false;

  constructor() {
  }

  ngOnInit() {


  }

  toggleCollapseSitebar(event) {
    event.preventDefault();
    if (this.isOnMobileView) {
      this.isSidebarOpen = true;
    }
  }

  collapseSitebarMobile() {
    this.isSidebarOpen = false;
  }
}
