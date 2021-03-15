import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-board-header',
  templateUrl: './board-header.component.html',
  styleUrls: ['./board-header.component.css']
})
export class BoardHeaderComponent implements OnInit {

  @Input() longs = 0;
  @Input() shorts = 0;
  @Input() class = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
