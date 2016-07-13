import { Component, Input } from '@angular/core';

@Component ({
    selector: 'admin-area',
    template: '<h1>{{ myTitle }}</h1> <h2>{{ pick }}</h2>',
})

export class AdminComponent {
    myTitle = 'Admin Stuff';
    pick = 'Pick things to compare';
}