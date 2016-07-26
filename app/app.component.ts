import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component ({
    selector: 'my-app',
    template: `
    <nav>
    <div class="nav-wrapper blue  lighten-2">
      <ul class="">
        <li><a [routerLink]="['/room-survey']" routerLinkActive="active">Survey</a></li>
        <li><a [routerLink]="['/admin-area']" routerLinkActive="active">Admin</a></li>
      </ul>
    </div>
  </nav>
    <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {
    title = 'we want better meetings!';
}
