import { Component } from '@angular/core';
import { HomeComponent } from './presentation/pages/home/home.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './presentation/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, FooterComponent, RouterModule],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img
            class="brand-logo"
            src="/assets/logo.svg"
            alt="logo"
            aria-hidden="true"
          />
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
      <app-footer></app-footer>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}