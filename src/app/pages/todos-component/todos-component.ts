import { Component } from '@angular/core';
import { Todos } from '../../services/todos';
import { Todo } from '../../models/todo-model/todo-model-module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos-component',
  imports: [FormsModule],
  templateUrl: './todos-component.html',
  styleUrl: './todos-component.scss',
})
export class TodosComponent {
  todoList : Todo[] = [];
  newTodoTitle : string = "";

  constructor(private todoService : Todos) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos() : void {
    this.todoList = this.todoService.getTodos();
  }

  addTodo() : void {
    this.todoService.addTodo(this.newTodoTitle);
    this.getTodos();
  }

  // updateTodos(id : Date, title : string) : void {
  //   this.todoService.updateTodo(id, title);
  //   this.getTodos();
  // }

  toggleTodo(id: Date) : void {
    this.todoService.toggleTodo(id);
    this.getTodos();
  }

  deleteTodo(id: Date) : void {
    this.todoService.deleteTodo(id);
    this.getTodos();
  }
}
