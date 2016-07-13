import { bootstrap }    from '@angular/platform-browser-dynamic';

import {AppComponent} from './app.component';
import { appRouteProviders } from './app.route';

bootstrap(AppComponent ,[
    appRouteProviders
]);
