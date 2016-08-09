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
var answer_service_1 = require('../../services/answer.service');
var question_service_1 = require('../../services/question.service');
var chart_component_1 = require('./chart.component');
require('rxjs/Rx');
var AdvancedQueryComponent = (function () {
    function AdvancedQueryComponent(answerService, questionService) {
        this.answerService = answerService;
        this.questionService = questionService;
        this.results = [];
        this.red = 0;
        this.green = 0;
        this.amber = 0;
        this.isClicked = false;
    }
    AdvancedQueryComponent.prototype.ngOnInit = function () {
    };
    //displays/updates the g,r,a counts
    AdvancedQueryComponent.prototype.tallySurveyAnswers = function () {
        //initialise to 0. ..so value doesnt change each time i click
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
    AdvancedQueryComponent.prototype.submit = function () {
        var _this = this;
        setTimeout(function () {
            _this.answerService
                .advancedQuery(_this.date, _this.endTime, _this.startTime, _this.mtgRoom)
                .then(function (result) { return _this.results = result; })
                .catch(function (error) { return _this.error = error; });
            setTimeout(function () {
                _this.tallySurveyAnswers();
                _this.isClicked = true;
            }, 50);
        }, 100);
    };
    AdvancedQueryComponent = __decorate([
        core_1.Component({
            selector: 'advanced-query',
            templateUrl: 'app/admin-area/advanced-query/advanced-query.component.html',
            styleUrls: ['app/admin-area/advanced-query/advanced-query.component.css'],
            providers: [answer_service_1.AnswerService, question_service_1.QuestionService],
            directives: [chart_component_1.BarChartDemoComponent]
        }), 
        __metadata('design:paramtypes', [answer_service_1.AnswerService, question_service_1.QuestionService])
    ], AdvancedQueryComponent);
    return AdvancedQueryComponent;
}());
exports.AdvancedQueryComponent = AdvancedQueryComponent;
//# sourceMappingURL=advanced-query.component.js.map