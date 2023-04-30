import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { LoginSignupComponent } from './content/pages/login-signup/login-signup.component';

const routes: Routes = [
  {
    path: '', component: ContentComponent
  },
  {
    path: 'login_signup', component: LoginSignupComponent
  },
  {
    path: '*', component: ContentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
