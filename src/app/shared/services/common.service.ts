import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  static isEmpty(data): boolean {
    return data === undefined || data === null || data === '';
  }

  isInRange(x: number, min: number, max: number) {
    return ((x - min) * (x - max) <= 0);
  }
}
