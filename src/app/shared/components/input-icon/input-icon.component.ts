import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'input-icon',
  templateUrl: './input-icon.component.html',
  styleUrls: ['./input-icon.component.scss']
})
export class InputIconComponent implements OnInit {
  @Input() iconClass;

  constructor() {
  }

  ngOnInit() {
  }

}
