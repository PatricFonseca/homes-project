import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../../components/housing-location/housing-location.component';
import { HousingService } from '../../components/housing-location/housing.service';
import { HousingLocationEntity } from '../../../data/repository/housing-location-entity';
import { driver } from 'driver.js';
import { text } from '@fortawesome/fontawesome-svg-core';

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
  driverObj = driver();

  ngOnInit() {
    this.driverObj.highlight({
      element: "#filter",
      popover: {
        title: "Filtro",
        description: "Pesquise aqui a cidade"
      }
    });
  }

  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocationEntity[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
      });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );

    this.driverObj.destroy();
  }
}
