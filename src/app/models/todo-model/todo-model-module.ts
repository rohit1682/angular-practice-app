import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Todo{
  id: Date;
  title: string;
  completed: boolean;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TodoModelModule { }
