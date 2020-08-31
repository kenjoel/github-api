import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReposComponent } from './repos/repos.component';
import { UsersComponent } from './users/users.component';
import { LandingComponent } from "./landing/landing.component"

const routes: Routes = [
  {
    path:"profile", component:UsersComponent
  },
  {
    path:"repos", component:ReposComponent
  },
  {
    path:"", redirectTo:"/profile", pathMatch:"full"
  },
  {
    path:"**", component:LandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
