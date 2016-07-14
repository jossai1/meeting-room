import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../models/question'; //to display a question on the top of the page
import { QuestionService } from '../services/question.service';
import { AnswerService } from '../services/answer.service';

import 'rxjs/add/operator/toPromise';



interface imageArray {
  link: string
}
@Component ({
    selector: 'room-survey',
    templateUrl: 'app/room-survey/room-survey.component.html',
    styleUrls: ['app/room-survey/room-survey.component.css'],
    providers: [ QuestionService, AnswerService ]
})

export class RoomSurveyComponent implements OnInit
{
    imageArray: Array<Object> = [];
    error: any;
    GreenCount: number = 0;
    RedCount: number = 0;
    AmberCount: number = 0;
    title = 'Room Survey Stuff';
    smiles = ':) :/ :(';
    questions: Question[] =[];

    constructor(private questionService: QuestionService,private answerService: AnswerService)
    {
        //an array of strings
        this.imageArray = [
          {link: 'app/assets/img/greenSmiley.png'},
          {link: 'app/assets/img/amberSmiley.png'},
          {link: 'app/assets/img/redSmiley.png'}];
    }

    ngOnInit()
    {
      //this.getQuestions();
    }


    getTime()
    {
       var date  = new Date();
       var currentTime = date.getDate() +'/'+ (date.getMonth()+1) + '/' + date.getFullYear() + ' - '+ date.getHours() + ':' + date.getMinutes() + ':'+ date.getSeconds();
       return currentTime;
     }


     logVote (questionID:string, response:string, time:string) {
       if (!response) { return; }
       console.log('done');
       this.answerService.logVote(questionID,response,time)
                        .then((error:any) =>  this.error = <any>error);
 }
    handleClicks(i:number )
    {
       if(i == 0)
       {
         this.GreenCount++;
         console.log('GreenCount: '+ this.GreenCount + ' - ' +  this.getTime());
         this.logVote("5784d21e69c702ad3b000002","green", this.getTime());
       }
       else if (i == 1)
       {
         this.AmberCount++;
         console.log('AmberCount: ' +this.AmberCount + ' - ' +  this.getTime());
         this.logVote("5784d21e69c702ad3b000002","amber", this.getTime());
       }
       else
       {
         this.RedCount++;
         console.log('Redcount:' + this.RedCount+ ' - ' +  this.getTime());
         this.logVote("5784d21e69c702ad3b000002","red", this.getTime());
       }

 }
//all thats  left to do here is logging votes - set up srevices first - serveisce done , url ? /db not active so errors occur
//and then dispalying a question from the db - using question service
}
