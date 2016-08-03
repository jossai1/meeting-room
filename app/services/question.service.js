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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var QuestionService = (function () {
    /*prod*/
    function QuestionService(http) {
        this.http = http;
        // private questionUrl = 'http://localhost:8080/api/questions';
        // private theQuestionUrl = 'http://localhost:8080/api/get-q';  // URL to web api
        /*for production*/
        this.questionUrl = 'http://172.20.32.38:8095/api/questions';
        this.theQuestionUrl = 'http://172.20.32.38:8095/api/get-q'; // URL to web api
    }
    QuestionService.prototype.getQuestions = function () {
        return this.http.get(this.questionUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //get a questuion that nmatches the given QID
    QuestionService.prototype.getAQuestion = function (q_id) {
        console.log('getting question...');
        var body = JSON.stringify({ q_id: q_id });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.theQuestionUrl, body, options)
            .toPromise() //chnaged to the res.json instaed of extract data
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    QuestionService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    QuestionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], QuestionService);
    return QuestionService;
}());
exports.QuestionService = QuestionService;
//# sourceMappingURL=question.service.js.map