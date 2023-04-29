import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './content/pages/login/login.component';
import { SignupComponent } from './content/pages/signup/signup.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
    path: '', component: ContentComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
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
