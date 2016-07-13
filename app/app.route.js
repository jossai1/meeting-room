"use strict";
var router_1 = require('@angular/router');
var room_survey_component_1 = require('./room-survey/room-survey.component');
var admin_component_1 = require("./admin-area/admin-component");
var routes = [
    {
        path: 'room-survey',
        component: room_survey_component_1.RoomSurveyComponent
    },
    {
        path: 'admin-area',
        component: admin_component_1.AdminComponent
    }
];
exports.appRouteProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.route.js.map