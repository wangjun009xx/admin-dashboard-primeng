import {Component, OnInit} from '@angular/core';
import {AdminPageService} from '../admin-page.service';
import {Router} from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  isOpenUserInfor = false;

  constructor(public apService: AdminPageService,
              private router: Router) {
  }

  ngOnInit() {
  }

  logout(event) {
    event.preventDefault();
    localStorage.setItem('token', '');
    this.router.navigate(['login']);
  }
}
