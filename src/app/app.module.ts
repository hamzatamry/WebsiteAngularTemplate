import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';
import { MenusComponent } from './components/menus/menus.component';
import { BasicComponent } from './components/basic/basic.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NavtabComponent } from './components/navtab/navtab.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent,
    MenusComponent,
    BasicComponent,
    SpinnerComponent,
    ProgressbarComponent,
    PaginationComponent,
    NavtabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
