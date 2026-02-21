import { Injectable } from '@angular/core';
import { Todo } from '../models/todo-model/todo-model-module';

@Injectable({
  providedIn: 'root',
})
export class Todos {
  private todoList: Todo[] = [];

  getTodos(): Todo[] {
    return this.todoList;
  }

  addTodo(title: string): void {
    if (!title.trim()) return;

    const newTodo: Todo = {
      id: new Date(),
      title: title.trim(),
      completed: false
    };
    
    this.todoList.push(newTodo);
  }

  toggleTodo(id: Date): void {
    const todo = this.todoList.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  // updateTodo(id: Date, title: string): void {
  //   const todo = this.todoList.find(t => t.id === id);
  //   if (todo) {
  //     todo.title = title.trim();
  //   }
  // }

  deleteTodo(id: Date): void {
    this.todoList = this.todoList.filter(t => t.id !== id);
  }
}
