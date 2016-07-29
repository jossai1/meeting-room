"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_route_1 = require('./app.route');
var shared_service_service_1 = require('./services/shared-service.service');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_route_1.appRouteProviders,
    http_1.HTTP_PROVIDERS,
    shared_service_service_1.SharedService
]);
//# sourceMappingURL=main.js.map