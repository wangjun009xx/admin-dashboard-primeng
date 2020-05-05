import {SCREEN_SIZE} from '../../core/constant/constants';

export class AdminPageService {
  isSidebarCollapse = false;
  isOnMobileView = true;
  isSidebarOpen = false;


  toggleCollapseSidebar(event) {
    event.preventDefault();
    if (this.isOnMobileView) {
      this.isSidebarOpen = true;
    } else {
      this.isSidebarCollapse = !this.isSidebarCollapse;
    }
  }

  collapseSidebarMobile() {
    this.isSidebarOpen = false;
  }

  checkViewOnResize(size) {
    this.isOnMobileView = [SCREEN_SIZE.XS, SCREEN_SIZE.SM, SCREEN_SIZE.MD].includes(size);
    if (!this.isOnMobileView) {
      this.isSidebarOpen = false;
    }
  }
}
