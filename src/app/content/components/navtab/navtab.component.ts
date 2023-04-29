import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navtab',
  templateUrl: './navtab.component.html',
  styleUrls: ['./navtab.component.css']
})
export class NavtabComponent implements OnInit {
  active = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
