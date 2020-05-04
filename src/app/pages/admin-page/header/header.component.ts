import {Component, OnInit} from '@angular/core';
import {AdminPageService} from '../admin-page.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  isOpenUserInfor = false;

  constructor(public apService: AdminPageService) {
  }

  ngOnInit() {
  }

}
