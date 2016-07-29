"use strict";
var router_1 = require('@angular/router');
var room_survey_component_1 = require('./room-survey/room-survey.component');
var admin_component_1 = require("./admin-area/admin-component");
var mtg_room_settings_component_1 = require("./room-survey/room-settings/mtg-room-settings.component");
mtg_room_settings_component_1.MeetingSettings;
var routes = [
    {
        path: 'room-survey',
        component: room_survey_component_1.RoomSurveyComponent
    },
    {
        path: 'admin-area',
        component: admin_component_1.AdminComponent
    },
    {
        path: 'settings-area',
        component: mtg_room_settings_component_1.MeetingSettings
    }
];
exports.appRouteProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.route.js.map