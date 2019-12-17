import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TotoComponent } from './toto/toto.component';
import { QuizModule } from './quiz/quiz.module';
import { RouterModule, Routes } from '@angular/router';
import { QuizListComponent } from './quiz/quiz-list/quiz-list.component';
import { LoginComponent } from './common/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    TotoComponent,
    TodoListComponent,
    LoginComponent
  ],
  imports: [ BrowserModule, QuizModule, RouterModule.forRoot(routes) ],
  bootstrap: [AppComponent]
})
export class AppModule { }
