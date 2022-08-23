import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { WelcomePageComponent } from './home_page/welcome-page/welcome-page.component';
import { UserFormComponent } from './pages/user-form/user-form.component';
import { UserListComponent } from './pages/user-list/user-list.component';

const routes: Routes = [{path:'welcom_page',component:WelcomePageComponent} ,{path:'user_form',component:UserFormComponent} ,{path:'user_list',component:UserListComponent} , {path:'' , pathMatch:'full' , redirectTo:'user_form'},

{path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
