import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.html',
  styleUrls: ['./counter.scss'],
})
export class Counter {
  // count: number = 0;
  // constructor() {}

  // increment() : number {
  //   return ++this.count;
  // }

  // decrement() : number {
  //   return --this.count;
  // }

  count = signal<number>(0);

  increment() : void {
    this.count.update(val => val+1)
  }

  decrement() : void {
    this.count.update(val => val-1)
  }

  anyChange($event : Event) : void {
    const input = $event.target as HTMLInputElement;
    const value = input.value === '' ? 0 : input.valueAsNumber;
    this.count.set(value);
  }
}
