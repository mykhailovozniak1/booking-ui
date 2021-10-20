import { Component } from '@angular/core';

import { bookedPlacesMock } from './booked-places-mock';

@Component({
  selector: 'ngx-booked-places',
  templateUrl: './booked-places.component.html',
  styleUrls: ['./booked-places.component.css']
})
export class BookedPlacesComponent {
  bookedPlacesMock = bookedPlacesMock;

  public notifyAboutUnbookedPlace(place) {
    const bookedPlaces = [...this.bookedPlacesMock];
    this.bookedPlacesMock = bookedPlaces.filter(p => p.id !== place.id);
  }
}
