import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { MenusComponent } from './content/components/menus/menus.component';
import { BasicComponent } from './content/components/basic/basic.component';
import { SpinnerComponent } from './content/components/spinner/spinner.component';
import { ProgressbarComponent } from './content/components/progressbar/progressbar.component';
import { PaginationComponent } from './content/components/pagination/pagination.component';
import { NavtabComponent } from './content/components/navtab/navtab.component';
import { AlertsComponent } from './content/components/alerts/alerts.component';
import { ModalsComponent } from './content/components/modals/modals.component';
import { ToastsComponent } from './content/components/toasts/toasts.component';
import { PopoversComponent } from './content/components/popovers/popovers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsComponent } from './content/components/cards/cards.component';
import { SlidersComponent } from './content/components/sliders/sliders.component';
import { TablesComponent } from './content/components/tables/tables.component';
import { LoginSignupComponent } from './content/pages/login-signup/login-signup.component';



 

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
    NavtabComponent,
    AlertsComponent,
    ModalsComponent,
    ToastsComponent,
    PopoversComponent,
    CardsComponent,
    SlidersComponent,
    TablesComponent,
    LoginSignupComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
