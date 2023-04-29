import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'WebSiteAngularTemplate';
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
