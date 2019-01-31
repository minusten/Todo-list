import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { NgModel} from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
  <div class='app-container'>
  <nav class="navbar navbar-dark bg-dark">
      <a routerLink="/home" >Home</a>
      <a routerLink="/todos" >Todo List</a>
      <a routerLink="/login" >Login</a>
      <a routerLink="/register" >Register</a>
    </nav>

    <div>
  <router-outlet></router-outlet>
  </div>
  </div>

   `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
}
