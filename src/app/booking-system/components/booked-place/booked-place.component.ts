import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

import { IPlace } from '../place/place.component';

@Component({
  selector: 'ngx-booked-place',
  templateUrl: './booked-place.component.html',
  styleUrls: ['./booked-place.component.css'],
  providers: [DatePipe]
})
export class BookedPlaceComponent {
  @Input() bookedPlace: IPlace;
  @Output() unbookPlaceEvent = new EventEmitter<IPlace>();

  constructor(private datePipe: DatePipe) { }

  public unbookPlace() {
    alert(`You successfully unbooked place: ${this.bookedPlace.name}`);
    this.unbookPlaceEvent.emit(this.bookedPlace);
  }
}
