/// <reference types="@types/googlemaps" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';
declare let google: any;
@Component({
    selector: 'map-component',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
    markers: [any];
    styles: any;
    markersHighlightedPos: number;
    @ViewChild('map', { static: true }) mapElement: any;
    map: google.maps.Map;
    ngOnInit(): void {
    }

    ngAfterViewInit() {
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


