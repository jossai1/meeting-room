import { provideRouter, RouterConfig } from '@angular/router';

import { RoomSurveyComponent }  from './room-survey/room-survey.component';
import { AdminComponent }       from "./admin-area/admin-component";

const routes: RouterConfig = [
    {
        path: 'room-survey',
        component: RoomSurveyComponent
    },
    {
        path: 'admin-area',
        component: AdminComponent
    }
];

export const appRouteProviders = [
    provideRouter(routes)
];