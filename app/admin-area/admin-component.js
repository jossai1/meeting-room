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
var question_1 = require('../models/question');
require('rxjs/Rx');
var AdminComponent = (function () {
    function AdminComponent(answerService, questionService) {
        this.answerService = answerService;
        this.questionService = questionService;
        this.myTitle = 'Survey Results';
        this.pickDate = 'Pick a date ';
        this.pickTime = '';
        this.answers = [];
        this.results = [];
        this.uniqDatesArr = [];
        this.answersTime = [];
        this.uniqTimes = [];
        this.red = 0;
        this.green = 0;
        this.amber = 0;
        this.isClicked = false;
        this.question = new question_1.Question(); //question that was asked //  question: Question;
        this.answers = [];
        this.question.questionText = "loading...";
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.getAnswers();
            setTimeout(function () {
                _this.getDates();
            }, 50);
        }, 90);
    };
    AdminComponent.prototype.getAQuestion = function (q_id) {
        var _this = this;
        this.questionService
            .getAQuestion(q_id)
            .then(function (q) { return _this.question = q; })
            .catch(function (error) { return _this.error = error; });
    };
    //invoked by 'give me dates button'
    // to get all the unique times of when answers where logged
    // get all the unique dates from the answers array
    AdminComponent.prototype.getDates = function () {
        for (var i = 0; i < this.answers.length; i++) {
            this.uniqDatesArr[i] = this.answers[i].date;
            console.log(this.uniqDatesArr[i]);
        }
        //remove duplicate dates
        this.uniqDatesArr = Array.from(new Set(this.uniqDatesArr));
        //removing undefined stuff/ items from the uuniqDatesArr
        this.uniqDatesArr = this.uniqDatesArr.filter(function (n) { return n != undefined; });
    };
    //TODO: change method name TallySurveyAnswers
    //this was a quick fix to display the votes of a date and time query , wasnt updating viotes properly before I added the 'tally' button
    //displays/updates the g,r,a counts
    AdminComponent.prototype.tallySurveyAnswers = function () {
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
    //TODO: change method name
    //method invoke by clicking a time button - this concludes tyhe selecting phase - time and date have been selected
    // i is the time index of time the user selceted
    // calls the answer service to fetch query results based on date and time selceted
    AdminComponent.prototype.finalQuery = function (i) {
        var _this = this;
        var finalTime;
        console.log(this.uniqTimes[i] + this.selectedDate);
        finalTime = this.uniqTimes[i].split(":")[0] + ".0";
        console.log(finalTime);
        setTimeout(function () {
            _this.answerService
                .finalQuery(_this.selectedDate, parseFloat(finalTime))
                .then(function (filtered) { return _this.results = filtered; })
                .catch(function (error) { return _this.error = error; });
            setTimeout(function () {
                _this.getAQuestion(_this.results[_this.results.length - 1].questionID);
                _this.tallySurveyAnswers();
                _this.isClicked = true;
            }, 50);
        }, 100);
        // var finalTime: string;
        // console.log( this.uniqTimes[i] + this.selectedDate );
        // finalTime = this.uniqTimes[i].split(":")[0] + ".0";
        // console.log(  finalTime);
        // this.answerService
        //    .finalQuery(this.selectedDate,parseFloat(finalTime))
        //    .then(filtered => this.results = filtered)
        //    .catch(error=> this.error = error);
        //a fix because it odesnt update manually the question is initially null
        //  if(this.results[0] == undefined)
        //  {
        //    //this.question = "loading..";
        //  }
        //  //set the question asked - by using the answers qid--- search by qid and get the questiontext
        //  else
        //  {
        //   //console.log("hi ih ihih "+ this.results[0].questionID);
        //     //this.question.questionText = this.results[0].questionID;
        //    this.getAQuestion(this.results[this.results.length - 1 ].questionID);
        //  };
    };
    AdminComponent.prototype.processTimes = function () {
        //put times in an array - so we can make it unique
        for (var i = 0; i < this.answersTime.length; i++) {
            this.uniqTimes[i] = this.answersTime[i].time.toString();
        }
        for (var i = 0; i < this.uniqTimes.length; i++) {
            this.uniqTimes[i] = this.uniqTimes[i].split(".")[0] + ":00";
        }
        this.uniqTimes = Array.from(new Set(this.uniqTimes));
        // this.tallySurveyAnswers();
        //
        // console.log(this.uniqTimes.length)
    };
    /** envoked by a date button-  should return all times responses were recorded in the selected date */
    // calls 'processTimes' method which filters them to get unique times and add a :00 at teh end
    AdminComponent.prototype.getTimes = function (i) {
        var _this = this;
        this.selectedDate = this.uniqDatesArr[i];
        console.log(this.selectedDate);
        setTimeout(function () {
            _this.answerService
                .getTimes(_this.selectedDate)
                .then(function (filtered) { return _this.answersTime = filtered; })
                .catch(function (error) { return _this.error = error; });
            setTimeout(function () {
                _this.pickTime = "What time was the meeting at ? ";
                _this.processTimes();
            }, 50);
        }, 50);
        //       this.selectedDate = this.uniqDatesArr[i];
        //         console.log(this.selectedDate);
        //         this.answerService
        //            .getTimes(this.selectedDate)
        //            .then(filtered => this.answersTime = filtered)
        //            .catch(error=> this.error = error);
        //             this.processTimes();
        //
    };
    AdminComponent.prototype.getAnswers = function () {
        var _this = this;
        this.answerService
            .getAnswers()
            .then(function (result) { return _this.answers = result; })
            .catch(function (error) { return _this.error = error; });
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