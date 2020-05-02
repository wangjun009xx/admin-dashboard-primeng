import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, fromEvent} from 'rxjs';
import {auditTime, distinctUntilChanged, map} from 'rxjs/operators';
import {CommonService} from './common.service';
import {SCREEN_SIZE} from '../../core/constants';

@Injectable({
  providedIn: 'root'
})
export class WindowResizeService {

  sizes = [
    {
      id: SCREEN_SIZE.XS,
      min: 0,
      max: 575
    },
    {
      value: SCREEN_SIZE.SM,
      min: 576,
      max: 767
    },
    {
      value: SCREEN_SIZE.MD,
      min: 768,
      max: 991
    },
    {
      value: SCREEN_SIZE.LG,
      min: 992,
      max: 1199
    },
    {
      value: SCREEN_SIZE.XL,
      min: 1200,
      max: 9999999999
    },
  ];


  readonly windowSizeChanged = new BehaviorSubject(this.getCurrentSreenSizeByWidth(this.window.innerWidth));

  constructor(@Inject('windowObject') private window: Window,
              private commonService: CommonService) {
    fromEvent(window, 'resize')
      .pipe(
        auditTime(100),
        map(event => (event.target as Window).innerWidth))
      .subscribe(windowSize => {
        this.windowSizeChanged.next(this.getCurrentSreenSizeByWidth(windowSize));
      });
  }

  onRezie() {
    return this.windowSizeChanged.asObservable().pipe(distinctUntilChanged());
  }

  getCurrentSreenSizeByWidth(width) {
    return this.sizes.filter(size => this.commonService.isInRange(width, size.min, size.max))[0].value;
  }


}
