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
var question_service_1 = require('../services/question.service');
require('rxjs/Rx');
var AdminComponent = (function () {
    //edited :boolean = true;
    function AdminComponent(answerService, questionService) {
        this.answerService = answerService;
        this.questionService = questionService;
        this.myTitle = 'Admin';
        this.pick = 'pick a date and select a time';
        this.answers = [];
        this.results = [];
        this.dates = [];
        this.times = [];
        this.months = [];
        this.arr = [];
        this.answersTime = [];
        this.uniqTimes = [];
        this.red = 0;
        this.green = 0;
        this.amber = 0;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.getAnswers();
        //this.fill();
    };
    AdminComponent.prototype.getAQuestion = function (q_id) {
        var _this = this;
        this.questionService
            .getAQuestion(q_id)
            .then(function (q) { return _this.question = q; })
            .catch(function (error) { return _this.error = error; });
    };
    AdminComponent.prototype.getDates = function () {
        for (var i = 0; i < this.answers.length; i++) {
            if (this.answers[i].date == undefined) { }
            else {
                this.arr[i] = this.answers[i].date;
            }
            console.log(this.arr[i]);
        }
        this.arr = Array.from(new Set(this.arr));
        //removing undefined stuff
        this.arr = this.arr.filter(function (n) { return n != undefined; });
        //this.fill();
    };
    AdminComponent.prototype.tally = function () {
        //so value doesnt change each time i click
        this.green = 0;
        this.amber = 0;
        this.red = 0;
        for (var i = 0; i < this.results.length; i++) {
            if (this.results[i].response == 'green') {
                this.green++;
            }
            else if (this.results[i].response == 'amber') {
                this.amber++;
            }
            else if (this.results[i].response == 'red') {
                this.red++;
            }
            else { }
        }
    };
    AdminComponent.prototype.finalQuery = function (i) {
        var _this = this;
        var finalTime;
        console.log(this.uniqTimes[i] + this.selectedDate);
        finalTime = this.uniqTimes[i].split(":")[0] + ".0";
        console.log(finalTime);
        this.answerService
            .finalQuery(this.selectedDate, parseFloat(finalTime))
            .then(function (filtered) { return _this.results = filtered; })
            .catch(function (error) { return _this.error = error; });
        if (this.results[0] == undefined) {
            this.question = 'loading..';
        }
        else {
            this.getAQuestion(this.results[0].questionID);
        }
        ;
        //this.processTimes();
    };
    AdminComponent.prototype.processTimes = function () {
        console.log('i made it o');
        //uniqTimes;
        //put times in an array - so we can make it unique
        for (var i = 0; i < this.answersTime.length; i++) {
            this.uniqTimes[i] = this.answersTime[i].time.toString();
        }
        for (var i = 0; i < this.uniqTimes.length; i++) {
            this.uniqTimes[i] = this.uniqTimes[i].split(".")[0] + ":00";
        }
        this.uniqTimes = Array.from(new Set(this.uniqTimes));
        this.tally();
        console.log(this.uniqTimes.length);
    };
    /** envoked by a date button-  should return all times things were recorded in the selected date */
    AdminComponent.prototype.getTimes = function (i) {
        var _this = this;
        this.selectedDate = this.arr[i];
        console.log(this.selectedDate);
        this.answerService
            .getTimes(this.selectedDate)
            .then(function (filtered) { return _this.answersTime = filtered; })
            .catch(function (error) { return _this.error = error; });
        this.processTimes();
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
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'admin-area',
            templateUrl: 'app/admin-area/admin-component.html',
            styleUrls: ['app/admin-area/admin-component.css'],
            providers: [answer_service_1.AnswerService, question_service_1.QuestionService]
        }), 
        __metadata('design:paramtypes', [answer_service_1.AnswerService, question_service_1.QuestionService])
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin-component.js.map