import { Component } from '@angular/core';
import { Person } from '../types/person';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  parentData: Person = { name: "John", age: 25 };
  arrayData: Person[] = [
    { name: "John", age: 25 },
    { name: "John1", age: 42 },
    { name: "John2", age: 5 },
    { name: "John3", age: 14 },
    { name: "John4", age: 32 }
  ]
  handleChildClick(mouseEvent: MouseEvent) {
    console.log('handleChildClick', mouseEvent);
    console.log(mouseEvent.target);


  }
}
