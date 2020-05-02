import {Component, OnDestroy, OnInit} from '@angular/core';
import {WindowResizeService} from '../../shared/services/window-resize.service';
import {SCREEN_SIZE} from '../../core/constants';
import {Subscription} from 'rxjs';

@Component({
  selector: 'admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit, OnDestroy {

  isSidebarCollapse = false;
  isOnMobileView = true;
  isSidebarOpen = false;
  windowResizeServiceSub: Subscription;

  constructor(private windowResizeService: WindowResizeService) {
  }

  ngOnInit() {
    this.windowResizeServiceSub = this.windowResizeService.onRezie().subscribe(size => {
      this.isOnMobileView = [SCREEN_SIZE.XS, SCREEN_SIZE.SM, SCREEN_SIZE.MD].includes(size);
      if (!this.isOnMobileView) {
        this.isSidebarOpen = false;
      }
    });
  }

  toggleCollapseSitebar(event) {
    event.preventDefault();
    if (this.isOnMobileView) {
      this.isSidebarOpen = true;
    } else {
      this.isSidebarCollapse = !this.isSidebarCollapse;
    }
  }

  collapseSitebarMobile() {
    this.isSidebarOpen = false;
  }

  ngOnDestroy(): void {
    this.windowResizeServiceSub.unsubscribe();
  }
}
