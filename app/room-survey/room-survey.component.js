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
var question_service_1 = require('../services/question.service');
var answer_service_1 = require('../services/answer.service');
require('rxjs/add/operator/toPromise');
var RoomSurveyComponent = (function () {
    function RoomSurveyComponent(questionService, answerService) {
        this.questionService = questionService;
        this.answerService = answerService;
        this.imageArray = [];
        this.GreenCount = 0;
        this.RedCount = 0;
        this.AmberCount = 0;
        this.title = 'Room Survey Stuff';
        this.smiles = ':) :/ :(';
        this.questions = [];
        //an array of strings
        this.imageArray = [
            { link: 'app/assets/img/greenSmiley.png' },
            { link: 'app/assets/img/amberSmiley.png' },
            { link: 'app/assets/img/redSmiley.png' }];
    }
    RoomSurveyComponent.prototype.ngOnInit = function () {
        //this.getQuestions();
    };
    RoomSurveyComponent.prototype.getTime = function () {
        var date = new Date();
        var currentTime = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' - ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        return currentTime;
    };
    RoomSurveyComponent.prototype.logVote = function (questionID, response, time) {
        var _this = this;
        if (!response) {
            return;
        }
        console.log('done');
        this.answerService.logVote(questionID, response, time)
            .then(function (error) { return _this.error = error; });
    };
    RoomSurveyComponent.prototype.handleClicks = function (i) {
        if (i == 0) {
            this.GreenCount++;
            console.log('GreenCount: ' + this.GreenCount + ' - ' + this.getTime());
            this.logVote("5784d21e69c702ad3b000002", "green", this.getTime());
        }
        else if (i == 1) {
            this.AmberCount++;
            console.log('AmberCount: ' + this.AmberCount + ' - ' + this.getTime());
            this.logVote("5784d21e69c702ad3b000002", "amber", this.getTime());
        }
        else {
            this.RedCount++;
            console.log('Redcount:' + this.RedCount + ' - ' + this.getTime());
            this.logVote("5784d21e69c702ad3b000002", "red", this.getTime());
        }
    };
    RoomSurveyComponent = __decorate([
        core_1.Component({
            selector: 'room-survey',
            templateUrl: 'app/room-survey/room-survey.component.html',
            styleUrls: ['app/room-survey/room-survey.component.css'],
            providers: [question_service_1.QuestionService, answer_service_1.AnswerService]
        }), 
        __metadata('design:paramtypes', [question_service_1.QuestionService, answer_service_1.AnswerService])
    ], RoomSurveyComponent);
    return RoomSurveyComponent;
}());
exports.RoomSurveyComponent = RoomSurveyComponent;
//# sourceMappingURL=room-survey.component.js.map