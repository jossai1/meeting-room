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
var common_1 = require('@angular/common');
var shared_service_service_1 = require('../../services/shared-service.service');
var ng2_charts_1 = require('ng2-charts/ng2-charts');
// webpack html imports
//let template = require('./bar-chart-demo.html');
var BarChartDemoComponent = (function () {
    function BarChartDemoComponent(sharedService) {
        this.sharedService = sharedService;
        this.red = 0;
        this.green = 0;
        this.amber = 0;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['Red', 'Green', 'Amber', ''];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [this.sharedService.getRed(), this.sharedService.getGreen(), this.sharedService.getAmber(), 0], label: 'Responses' }
        ];
        this.barChartColors = [{ backgroundColor: ["#f44336", "#4caf50", "#ffc107", "#e74c3c"] }];
    }
    BarChartDemoComponent.prototype.refresh = function () {
        // this.red= this.sharedService.getRed();
        // this.green = this.sharedService.getGreen();
        // this.amber = this.sharedService.getAmber();
        var _barChartData = [
            { data: [this.sharedService.getRed(), this.sharedService.getGreen(), this.sharedService.getAmber(), 0], label: 'Responses' }
        ];
        console.log(_barChartData);
        this.barChartData = _barChartData;
        //returns [2,3,3] data[] arr
        // this.barChartData[0].data[0] = this.sharedService.getRed();
        // this.barChartData[0].data[1] = this.sharedService.getGreen();
        // this.barChartData[0].data[2] = this.sharedService.getAmber();
        //console.log("jijii"+this.barChartData[0].data[0]);
    };
    // events
    BarChartDemoComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    BarChartDemoComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    BarChartDemoComponent = __decorate([
        core_1.Component({
            selector: 'bar-chart-demo',
            templateUrl: 'app/admin-area/advanced-query/chart.component.html',
            directives: [ng2_charts_1.CHART_DIRECTIVES, common_1.NgClass, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [shared_service_service_1.SharedService])
    ], BarChartDemoComponent);
    return BarChartDemoComponent;
}());
exports.BarChartDemoComponent = BarChartDemoComponent;
//# sourceMappingURL=chart.component.js.map