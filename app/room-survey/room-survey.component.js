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
var question_1 = require('../models/question'); //to display a question on the top of the page
var question_service_1 = require('../services/question.service');
var answer_service_1 = require('../services/answer.service');
var shared_service_service_1 = require('../services/shared-service.service');
require('rxjs/add/operator/toPromise');
var RoomSurveyComponent = (function () {
    function RoomSurveyComponent(questionService, answerService, sharedService) {
        this.questionService = questionService;
        this.answerService = answerService;
        this.sharedService = sharedService;
        this.imageArray = [];
        this.GreenCount = 0;
        this.RedCount = 0;
        this.AmberCount = 0;
        this.title = 'Room Survey';
        this.questions = [];
        this.theQuestion = new question_1.Question();
        //an array of strings
        this.imageArray = [
            { link: 'app/assets/img/greenSmiley.png' },
            { link: 'app/assets/img/amberSmiley.png' },
            { link: 'app/assets/img/redSmiley.png' }];
    }
    RoomSurveyComponent.prototype.getAQuestion = function (q_id) {
        var _this = this;
        this.questionService
            .getAQuestion(q_id)
            .then(function (q) { return _this.theQuestion = q; })
            .catch(function (error) { return _this.error = error; });
    };
    RoomSurveyComponent.prototype.getQuestions = function () {
        var _this = this;
        this.questionService
            .getQuestions()
            .then(function (result) { return _this.questions = result; })
            .catch(function (error) { return _this.error = error; });
        this.title = this.questions[0].questionText;
    };
    RoomSurveyComponent.prototype.ngOnInit = function () {
        //PROD DB QUESTION ID FOR QUETION - HOW WAS THE MEETING? 
        /*PROD ONLY */ this.getAQuestion("57a0cb8a7ca31592a8f66d28");
        var roomName = this.sharedService.getRoomName();
        if (roomName == '') {
            console.log('room name not set yet ');
            alert("please set the room!");
        }
        else {
            this.mtgRoom = roomName;
            console.log('set to: ' + roomName);
        }
        // this.mtgRoom = this.sharedService.getRoomName();
    };
    RoomSurveyComponent.prototype.procString = function (hour, min) {
        if (hour.toString().length == 1) {
            hour = '0' + hour;
        }
        if (min.toString().length == 1) {
            min = '0' + min;
        }
        return hour + '.' + min;
    };
    //log current time for answer enyry
    RoomSurveyComponent.prototype.getTime = function () {
        var date = new Date();
        var currentTime = date.getHours() + '.' + date.getMinutes();
        //console.log(parseFloat(this.procString( 12,30)));
        //proc string is for adding an extra 0 to unit numbers like 12:03 will be 12.3 - > pro string turns it to 12:03
        return parseFloat(this.procString(date.getHours().toString(), date.getMinutes().toString()));
    };
    //log current time for answer enyry
    RoomSurveyComponent.prototype.getDate = function () {
        var date = new Date();
        //var currentTime = date.getDate() +'/'+ (date.getMonth()+1) + '/' + date.getFullYear() + ' - '+ date.getHours() + ':' + date.getMinutes() + ':'+ date.getSeconds();
        var currentTime = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
        return currentTime;
    };
    //add a vote/ckick to the database
    RoomSurveyComponent.prototype.logVote = function (questionID, response, time, date, mtgRoom) {
        var _this = this;
        if (!response) {
            return;
        }
        console.log('done');
        this.answerService.logVote(questionID, response, time, date, mtgRoom)
            .then(function (error) { return _this.error = error; });
    };
    //log clicks
    RoomSurveyComponent.prototype.handleClicks = function (i, event) {
        event.preventDefault();
        event.stopPropagation();
        if (i == 0) {
            this.GreenCount++;
            console.log('GreenCount: ' + this.GreenCount + ' - ' + this.getTime());
            this.logVote(this.theQuestion._id, "green", this.getTime(), this.getDate(), this.mtgRoom);
        }
        else if (i == 1) {
            this.AmberCount++;
            console.log('AmberCount: ' + this.AmberCount + ' - ' + this.getTime());
            this.logVote(this.theQuestion._id, "amber", this.getTime(), this.getDate(), this.mtgRoom);
        }
        else if (i == 2) {
            this.RedCount++;
            console.log('Redcount:' + this.RedCount + ' - ' + this.getTime());
            this.logVote(this.theQuestion._id, "red", this.getTime(), this.getDate(), this.mtgRoom);
        }
        else {
        }
    };
    RoomSurveyComponent = __decorate([
        core_1.Component({
            selector: 'room-survey',
            templateUrl: 'app/room-survey/room-survey.component.html',
            styleUrls: ['app/room-survey/room-survey.component.css'],
            providers: [question_service_1.QuestionService, answer_service_1.AnswerService]
        }), 
        __metadata('design:paramtypes', [question_service_1.QuestionService, answer_service_1.AnswerService, shared_service_service_1.SharedService])
    ], RoomSurveyComponent);
    return RoomSurveyComponent;
}());
exports.RoomSurveyComponent = RoomSurveyComponent;
//# sourceMappingURL=room-survey.component.js.map