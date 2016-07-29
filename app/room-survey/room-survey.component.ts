import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../models/question'; //to display a question on the top of the page
import { QuestionService } from '../services/question.service';
import { AnswerService } from '../services/answer.service';
import { SharedService } from '../services/shared-service.service';


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
    mtgRoom:string;

    constructor(private questionService: QuestionService,private answerService: AnswerService,private sharedService:SharedService)
    {
        //an array of strings
        this.imageArray = [
          {link: 'app/assets/img/greenSmiley.png'},
          {link: 'app/assets/img/amberSmiley.png'},
          {link: 'app/assets/img/redSmiley.png'}];
    }

    getAQuestion( q_id: string )
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
        this.getAQuestion( "578f58f68d0766a34f000393" );
        var roomName = this.sharedService.getRoomName();

        if(roomName == '' )
        {
            console.log('room name not set yet ');

            alert("please set the room!");

            //will redirect to settings page
              // if (confirm)
              // {
              //   window.location.replace('http://localhost:3000/settings-area');
              // }
              // else
              // {
              //     alert('Why did you press cancel? You should have confirmed');
              // }

        }
        else
        {
          this.mtgRoom = roomName ;
          console.log('set to: ' +  roomName);
        }
        // this.mtgRoom = this.sharedService.getRoomName();

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
     logVote ( questionID:string, response:string, time:number,date:string, mtgRoom:string ) {
       if (!response) { return; }
       console.log('done');
       this.answerService.logVote(questionID,response,time,date,mtgRoom)
                        .then((error:any) =>  this.error = <any>error);
 }

      //log clicks
    handleClicks(i:number,event:any  )
    {
      event.preventDefault();
      event.stopPropagation();

       if(i == 0)
       {
         this.GreenCount++;
         console.log('GreenCount: '+ this.GreenCount + ' - ' +  this.getTime());
         this.logVote(this.theQuestion._id,"green", this.getTime(),this.getDate(),this.mtgRoom);
       }
       else if (i == 1)
       {
         this.AmberCount++;
         console.log('AmberCount: ' +this.AmberCount + ' - ' +  this.getTime());
         this.logVote(this.theQuestion._id,"amber", this.getTime(),this.getDate(),this.mtgRoom);
         //the questionid would come from this.quiestion.questionid,id o=roiy
       }
       else if(i == 2 )
       {
         this.RedCount++;
         console.log('Redcount:' + this.RedCount+ ' - ' +  this.getTime());
         this.logVote(this.theQuestion._id,"red", this.getTime(),this.getDate(),this.mtgRoom);
       }
       else{

       }

 }

}
