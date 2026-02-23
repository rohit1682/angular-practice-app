import { Routes } from '@angular/router';
import { TodosComponent } from './pages/todos-component/todos-component';
import { Counter } from './pages/counter/counter';
import { HomeComponent } from './home-component/home-component';
import { PageNotFoundComponent } from './page-not-found-component/page-not-found-component';

export const routes: Routes = [
    {path: 'todos', component: TodosComponent},
    {path: 'counter', component: Counter},
    {path: 'home', component: HomeComponent},
    {path: '', pathMatch: 'full', redirectTo: '/home'},
    {path: '**', component: PageNotFoundComponent}
];
