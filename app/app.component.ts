import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component ({
    selector: 'my-app',
    template: `
    <nav>
      <a [routerLink]="['/room-survey']" routerLinkActive="active">Survey</a>
      <a [routerLink]="['/admin-area']" routerLinkActive="active">Admin</a>
    </nav>
    <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {
    title = 'we want better meetings!';
}
