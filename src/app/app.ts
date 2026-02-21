import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './pages/todos-component/todos-component';
import { Counter } from './pages/counter/counter';

@Component({
  selector: 'app-root',
  imports: [Counter, TodosComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-practice-app');
}
