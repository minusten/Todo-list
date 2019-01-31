import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

  @Component({
    selector: 'app-todos',
    templateUrl: 'todos.component.html',
    styleUrls: ['todos.component.css']
  })

  export class TodosComponent {

    newTodo: string;
    todos: any;
    todoObj: any;

    constructor() {
      this.newTodo = '';
      this.todos = [];
    }

    addTodo(event) {
      this.todoObj = {
        newTodo: this.newTodo,
        completed: false
      };
      this.todos.push(this.todoObj);
      this.newTodo = '';
      event.preventDefault();
    }

    deleteTodo(index) {
      this.todos.splice(index, 1);
    }

    deleteSelectedTodos() {
      for (let i = (this.todos.length - 1); i > -1; i--) {
        if (this.todos[i].completed) {
          this.todos.splice(i, 1);
        }
      }
    }
}
