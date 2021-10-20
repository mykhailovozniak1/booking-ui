import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

export interface IPlace {
  name: string;
  imageUrl: string;
  description: string;
  rating: number;
  reservedDate: string;
}

@Component({
  selector: 'ngx-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css'],
  providers: [DatePipe]
})
export class PlaceComponent {
  @Input() place: IPlace;
  @Output() bookedPlaceEvent = new EventEmitter<IPlace>();

  constructor(private datePipe: DatePipe) { }

  public bookPlace() {
    alert(`You successfully booked place: ${this.place.name}`);
    this.bookedPlaceEvent.emit(this.place);
  }
}
