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
    title = 'Room Survey';
    questions: Question[] =[];
    theQuestion: Question = new Question();

    constructor(private questionService: QuestionService,private answerService: AnswerService)
    {
        //an array of strings
        this.imageArray = [
          {link: 'app/assets/img/greenSmiley.png'},
          {link: 'app/assets/img/amberSmiley.png'},
          {link: 'app/assets/img/redSmiley.png'}];
    }

    getAQuestion( q_id:string )
    {
      this.questionService
         .getAQuestion(q_id)
         .then(q => this.theQuestion = q)
         .catch(error => this.error = error);

    }

    getQuestions()
    {
      this.questionService
         .getQuestions()
         .then(result => this.questions = result)
         .catch(error => this.error = error);
         this.title = this.questions[0].questionText;
    }

    ngOnInit()
    {
        //here you can load any question and the smileys will reference its id to log answers
        // use for pre-prod only this.getAQuestion( "578f58f68d0766a34f000393" );
        
        //use this id for production for db on ssh 
        this.getAQuestion( "5798ba641879ebea6e00000c" );
    }

     procString(hour:string,min:string)
     {
       if(hour.toString().length == 1) {
            hour = '0'+hour;
           }
           if(min.toString().length == 1) {
              min = '0'+min;
         }
         return hour + '.' + min;
     }

     //log current time for answer enyry
     getTime()
     {
        var date  = new Date();
        var currentTime = date.getHours() + '.' + date.getMinutes();
        //console.log(parseFloat(this.procString( 12,30)));
        //proc string is for adding an extra 0 to unit numbers like 12:03 will be 12.3 - > pro string turns it to 12:03
        return parseFloat(this.procString( date.getHours().toString(),date.getMinutes().toString()));
      }

      //log current time for answer enyry
      getDate()
      {
         var date  = new Date();
         //var currentTime = date.getDate() +'/'+ (date.getMonth()+1) + '/' + date.getFullYear() + ' - '+ date.getHours() + ':' + date.getMinutes() + ':'+ date.getSeconds();
         var currentTime = date.getDate() +'/'+ (date.getMonth()+1) + '/' + date.getFullYear();
         return currentTime;
       }

      //add a vote/ckick to the database
     logVote ( questionID:string, response:string, time:number,date:string ) {
       if (!response) { return; }
       console.log('done');
       this.answerService.logVote(questionID,response,time,date)
                        .then((error:any) =>  this.error = <any>error);
 }

      //log clicks
    handleClicks(i:number )
    {
       if(i == 0)
       {
         this.GreenCount++;
         console.log('GreenCount: '+ this.GreenCount + ' - ' +  this.getTime());
        //  var photo = document.getElementById("answer0"); //or use jQuery's $("#photo")
        //  var tween = TweenLite.to(answer0, 1.5,{backgroundColor:"#48fb47"});
        // TweenLite.to(answer0, 1.5,ease:"Elastic.easeOut", {backgroundColor:"#48fb47"});
        //change id to whatever question you wnat to ask
         this.logVote(this.theQuestion._id,"green", this.getTime(),this.getDate());
       }
       else if (i == 1)
       {
         this.AmberCount++;
         console.log('AmberCount: ' +this.AmberCount + ' - ' +  this.getTime());
         this.logVote(this.theQuestion._id,"amber", this.getTime(),this.getDate());
         //the questionid would come from this.quiestion.questionid,id o=roiy
       }
       else
       {
         this.RedCount++;
         console.log('Redcount:' + this.RedCount+ ' - ' +  this.getTime());
         this.logVote(this.theQuestion._id,"red", this.getTime(),this.getDate());
       }





 }
//all thats  left to do here is logging votes - set up srevices first - serveisce done , url ? /db not active so errors occur
//and then dispalying a question from the db - using question service
}
