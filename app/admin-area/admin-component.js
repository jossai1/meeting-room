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
var answer_service_1 = require('../services/answer.service');
var unique_pipe_1 = require('./unique.pipe');
var AdminComponent = (function () {
    function AdminComponent(answerService) {
        this.answerService = answerService;
        this.myTitle = 'Admin Stuff';
        this.pick = 'Pick things to compare';
        this.answers = [];
        this.dates = [];
        this.times = [];
        this.months = [];
        this.arr = [];
    }
    AdminComponent.prototype.getDates = function () {
        for (var i = 0; i < this.answers.length; i++) {
            if (this.answers[i].date === ' ') {
                console.log('ff');
            }
            else {
                this.arr[i] = this.answers[i].date;
            }
            console.log(this.arr[i]);
        }
        //console.log(this.arr[0]);
        this.arr = Array.from(new Set(this.arr));
        this.fill();
    };
    AdminComponent.prototype.getAnswers = function () {
        var _this = this;
        this.answerService
            .getAnswers()
            .then(function (heroes) { return _this.answers = heroes; })
            .catch(function (error) { return _this.error = error; });
    };
    AdminComponent.prototype.fill = function () {
        // var i:number;
        // for( i = 1 ; i<= 31; i++)
        // {
        //   console.log(i);
        //   this.dates.push(i );
        //
        // }
        var j;
        for (j = 0; j <= 24; j++) {
            //console.log(j);
            this.times.push(j + ':00');
        }
        //
        // this.months.push('january');
        // this.months.push('feburary');
        // this.months.push('march');
        // this.months.push('april');
        //
    };
    AdminComponent.prototype.ngOnInit = function () {
        this.getAnswers();
        //this.fill();
    };
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'admin-area',
            templateUrl: 'app/admin-area/admin-component.html',
            styleUrls: ['app/admin-area/admin-component.css'],
            providers: [answer_service_1.AnswerService],
            pipes: [unique_pipe_1.UniqueStuff]
        }), 
        __metadata('design:paramtypes', [answer_service_1.AnswerService])
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin-component.js.map