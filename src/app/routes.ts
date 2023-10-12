import { Routes } from '@angular/router';
import { HomeComponent } from './presentation/components/home/home.component';
import { DetailsComponent } from './presentation/components/details/details.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details',
  },
];

export default routeConfig;
