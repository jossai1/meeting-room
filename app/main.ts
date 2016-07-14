import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import {AppComponent} from './app.component';
import { appRouteProviders } from './app.route';

bootstrap(AppComponent ,[
    appRouteProviders,
    HTTP_PROVIDERS
]);
