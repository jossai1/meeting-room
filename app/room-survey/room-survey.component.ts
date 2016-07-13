import { Component, Input } from '@angular/core';

@Component ({
    selector: 'room-survey',
    template: '<h1>{{ title }}</h1> <h2>{{ smiles }}</h2>',
})

export class RoomSurveyComponent {
    title = 'Room Survey Stuff';
    smiles = ':) :/ :(';
}