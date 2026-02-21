import { Injectable } from '@angular/core';
import { Todo } from '../models/todo-model/todo-model-module';

@Injectable({
  providedIn: 'root',
})

export class Todos {
  private todoList : Todo[] = [];

  constructor() {
    this.loadFromLocalStorage();
  }

  getTodos() : Todo[] {
    return this.todoList;
  }

  addTodo(title : string) {
    if(!title.trim()) return;

    const newTodo : Todo = {
      id: new Date(),
      title,
      completed: false
    }
    
    this.todoList.push(newTodo);
    this.saveToLocalStorage();
  }

  toggleTodo(id: Date) : void {
    const todo = this.todoList.find(t => t.id === id);
    if(todo) {
      todo.completed = !todo.completed;
      this.saveToLocalStorage();
    }
  }

  updateTodo(id: Date, title: string) : void {
    const todo = this.todoList.find(t => t.id === id);
    if(todo) {
      todo.title = title;
      this.saveToLocalStorage();
    }
  }

  deleteTodo(id: Date) : void {
    this.todoList = this.todoList.filter(t => t.id !== id);
    this.saveToLocalStorage();
  }

  private saveToLocalStorage() : void {
    localStorage.setItem('todos', JSON.stringify(this.todoList));
  }

  private loadFromLocalStorage() : void {
    const data = localStorage.getItem('todos');
    this.todoList = data ? JSON.parse(data) : [];
  }

}
