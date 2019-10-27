/// <reference types="@types/googlemaps" />
import { Component, ViewChild } from '@angular/core';
@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  markers: [any];
  styles: any;
  markersHighlightedPos: number;
  @ViewChild('mapfooter', { static: true }) mapElement: any;
  map: google.maps.Map;
  isContact: boolean;
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.isContact = true;
    const mapProperties = {
      center: new google.maps.LatLng(21.00948213550961, 105.85033714771272),
      zoom: 16,
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    var marker = new google.maps.Marker({
      map: this.map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: { lat: 21.00948213550961, lng: 105.85033714771272 }
    });
    marker.setMap(this.map);
  }
}
