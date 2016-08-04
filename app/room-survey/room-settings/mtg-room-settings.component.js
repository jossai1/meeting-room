"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var room_survey_component_1 = require('../room-survey.component');
var shared_service_service_1 = require('../../services/shared-service.service');
var MeetingSettings = (function () {
    function MeetingSettings(sharedService) {
        this.sharedService = sharedService;
        this.mtgRooms = ['Albert', 'Boardroom', 'Brooklyn', 'Grosvenor', 'Hammersmith', 'Helix', 'Mathematical', 'Millau', 'Millenium', 'Sydney', 'Westminister'];
    }
    MeetingSettings.prototype.ngOnInit = function () {
    };
    MeetingSettings.prototype.submit = function () {
        console.log(this.mtgRoom);
        this.sharedService.set(this.mtgRoom);
    };
    MeetingSettings.prototype.set = function (i) {
        //console.log(this.mtgRooms[i].name);
        this.sharedService.set(this.mtgRooms[i]);
    };
    MeetingSettings = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [room_survey_component_1.RoomSurveyComponent],
            templateUrl: 'app/room-survey/room-settings/mtg-room-settings.component.html',
            styleUrls: ['app/room-survey/room-settings/mtg-room-settings.component.css']
        }), 
        __metadata('design:paramtypes', [shared_service_service_1.SharedService])
    ], MeetingSettings);
    return MeetingSettings;
}());
exports.MeetingSettings = MeetingSettings;
//# sourceMappingURL=mtg-room-settings.component.js.map