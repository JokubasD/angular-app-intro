import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Person } from '../types/person';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() personalAttribute: Person;
  @Output() onClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  constructor() {
    console.log('constructor');
    console.log('personAttribute', this.personalAttribute);

  }
  ngOnInit(): void {
    console.log('ngOnInit');
    console.log('personAttribute', this.personalAttribute);
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }
}
