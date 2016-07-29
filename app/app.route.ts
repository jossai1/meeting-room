import { provideRouter, RouterConfig } from '@angular/router';

import { RoomSurveyComponent }  from './room-survey/room-survey.component';
import { AdminComponent }   from "./admin-area/admin-component";
import { MeetingSettings }   from "./room-survey/room-settings/mtg-room-settings.component";

MeetingSettings
const routes: RouterConfig = [
    {
        path: 'room-survey',
        component: RoomSurveyComponent
    },
    {
        path: 'admin-area',
        component: AdminComponent
    },
    {
        path: 'settings-area',
        component: MeetingSettings
    }
];

export const appRouteProviders = [
    provideRouter(routes)
];
