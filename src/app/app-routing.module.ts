import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { WelcomePageComponent } from './home_page/welcome-page/welcome-page.component';
import { ExpenseFormComponent } from './pages/expense-form/expense-form.component';
import { ExpenseReportComponent } from './pages/expense-report/expense-report.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { UserFormComponent } from './pages/user-form/user-form.component';
import { UserListComponent } from './pages/user-list/user-list.component';

const routes: Routes = [{path:'welcom_page',component:WelcomePageComponent} ,{path:'user_form',component:UserFormComponent} ,{path:'user_list',component:UserListComponent} , {path:'' , pathMatch:'full' , redirectTo:'user_form'},
{path:'sign-in',component:SignInComponent},
{path:'expense-form',component:ExpenseFormComponent},
{path:'expense-report',component:ExpenseReportComponent},
{path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
