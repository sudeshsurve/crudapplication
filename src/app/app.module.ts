import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './home_page/welcome-page/welcome-page.component';
import { HeaderComponent } from './header/header.component';
import { UserFormComponent } from './pages/user-form/user-form.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { ErrorComponent } from './error/error.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ExpenseFormComponent } from './pages/expense-form/expense-form.component';
import { ExpenseReportComponent } from './pages/expense-report/expense-report.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    HeaderComponent,
    UserFormComponent,
    UserListComponent,
    FilterPipe,
    ErrorComponent,
    SignInComponent,
    ExpenseFormComponent,
    ExpenseReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
