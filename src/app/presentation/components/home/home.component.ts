import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
// import { HousingLocation } from '../housing-location/housinglocation';
import { HousingService } from '../housing-location/housing.service';
import { HousingLocationEntity } from '../../../data/repository/housing-location-entity';
// import { HousingService } from './housing.service';
// import { HousingLocation } from '../housing-location/housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  housingLocationList: HousingLocationEntity[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocationEntity[] = [];

  constructor() {
    // this.housingLocationList = this.housingService.getAllHousingLocations();
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocationEntity[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
      });
    // this.filteredLocationList = this.housingLocationList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
