import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.css']
})
export class ToastsComponent implements OnInit {
  show = false;
  show2 = false;

	autohide = true;
  constructor() { }

  ngOnInit(): void {
  
  }

  reload(): void {
    window.location.reload();
  }

  
}
