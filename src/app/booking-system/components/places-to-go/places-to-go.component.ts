import { Component } from '@angular/core';


import { placesToGoMock } from './places-to-go-mock';

@Component({
  selector: 'ngx-places-to-go',
  templateUrl: './places-to-go.component.html',
  styleUrls: ['./places-to-go.component.css']
})
export class PlacesToGoComponent {
  placesToGoMock = placesToGoMock;

  public notifyAboutBookedPlace(place) {
    const placesToGo = [...this.placesToGoMock];
    this.placesToGoMock = placesToGo.filter(p => p.id !== place.id);
  }
}

