import {Component, OnDestroy, OnInit} from '@angular/core';
import {WindowResizeService} from '../../shared/services/window-resize.service';
import {Subscription} from 'rxjs';
import {AdminPageService} from './admin-page.service';

@Component({
  selector: 'admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit, OnDestroy {


  windowResizeServiceSub: Subscription;

  constructor(private windowResizeService: WindowResizeService,
              public apService: AdminPageService) {
  }

  ngOnInit() {
    this.windowResizeServiceSub = this.windowResizeService.onRezie().subscribe(size => {
      this.apService.checkViewOnResize(size);
    });
  }


  ngOnDestroy(): void {
    this.windowResizeServiceSub.unsubscribe();
  }
}
