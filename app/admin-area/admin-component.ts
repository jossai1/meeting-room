import { Component, Input, OnInit} from '@angular/core';
import { AnswerService } from '../services/answer.service';
import { QuestionService } from '../services/question.service';
import { Answer } from '../models/answer';
import { Question } from '../models/question';
import 'rxjs/Rx';


@Component ({
    selector: 'admin-area',
    templateUrl: 'app/admin-area/admin-component.html',
    styleUrls: ['app/admin-area/admin-component.css'],
    providers: [ AnswerService, QuestionService ]
})

export class AdminComponent implements OnInit
{
    myTitle = 'Admin';
    pick = 'pick a date and select a time';
    error: any;
    answers: Answer[] =[];
    results: Answer[] =[];
    uniqDatesArr:string[] = [];
    answersTime: Answer[] =[];
    uniqTimes: string []= [];
    selectedDate:string;
    red:number = 0;
    green:number=0;
    amber:number=0;
    question: Question = new Question(); //question that was asked //  question: Question;


    constructor(private answerService: AnswerService,private questionService: QuestionService)
    {  this.answers = [] ;this.question.questionText = "loading...";}


    ngOnInit()
    {

        this.getAnswers();
    }

    getAQuestion(q_id:string)
    {
      this.questionService
         .getAQuestion(q_id)
         .then(q => this.question = q)
         .catch(error => this.error = error);

    }

    //involved by 'give me fates button'
    // to get all the unique times of when answers where logged
    // get all the unique dates from the answers array
    getDates()
    // change for for loops to filters (ac to show jane)
    {
        for(var i =0 ; i < this.answers.length;i++)
        {

            this.uniqDatesArr[i] = this.answers[i].date;
            console.log(this.uniqDatesArr[i]);
        }
        //remove duplicate dates
        this.uniqDatesArr =  Array.from(new Set(this.uniqDatesArr));

        //removing undefined stuff/ items from the uuniqDatesArr
        this.uniqDatesArr = this.uniqDatesArr.filter(function(n){ return n != undefined });
    }



    //this was a quick fix to display the votes of a date and time query , wasnt updating viotes properly before I added the 'tally' button
    //displays/updates the g,r,a counts
    tally()
    {
      //initialise to 0. ..so value doesnt change each time i click
      this.green = 0;
      this.amber = 0;
      this.red = 0;

      for(var i =0 ; i < this.results.length;i++)
      {
        if( this.results[i].response == 'green')
        { this.green++;

        }
        else if ( this.results[i].response == 'amber')
        { this.amber++;}

        else if ( this.results[i].response == 'red')
        {this.red++;}

        else{}
      }

    }


    //method invoke by clicking a time button - this concludes tyhe selecting phase - time and date have been selected
    // i is the time index of time the user selceted
    // calls the answer service to fetch query results based on date and time selceted
    finalQuery(i:number)
    {
      var finalTime: string;
      console.log( this.uniqTimes[i] + this.selectedDate );
      finalTime = this.uniqTimes[i].split(":")[0] + ".0";
      console.log(  finalTime);
      this.answerService
         .finalQuery(this.selectedDate,parseFloat(finalTime))
         .then(filtered => this.results = filtered)
         .catch(error=> this.error = error);

         //a fix because it odesnt update manually the question is initially null
         if(this.results[0] == undefined)
         {
           //this.question = "loading..";
         }
         //set the question asked - by using the answers qid--- search by qid and get the questiontext
         else
         {
          //console.log("hi ih ihih "+ this.results[0].questionID);
            //this.question.questionText = this.results[0].questionID;
           this.getAQuestion(this.results[this.results.length - 1 ].questionID);
         };
    }


    processTimes()
    {

      console.log('i made it o');
      //put times in an array - so we can make it unique
      for(var i =0 ; i < this.answersTime.length;i++)
      {
        this.uniqTimes[i] = this.answersTime[i].time.toString();
      }

      for(var i =0 ; i < this.uniqTimes.length;i++)
      {
          this.uniqTimes[i] =   this.uniqTimes[i].split(".")[0] + ":00";
      }

      this.uniqTimes =  Array.from(new Set(this.uniqTimes));
      this.tally();

      console.log(this.uniqTimes.length)
    }


    /** envoked by a date button-  should return all times responses were recorded in the selected date */
    // calls 'processTimes' method which filters them to get unique times and add a :00 at teh end
    getTimes(i:number)
    {
      this.selectedDate = this.uniqDatesArr[i];
      console.log(this.selectedDate);
      this.answerService
         .getTimes(this.selectedDate)
         .then(filtered => this.answersTime = filtered)
         .catch(error=> this.error = error);
          this.processTimes();
    }


    getAnswers()
    {
      this.answerService
         .getAnswers()
         .then(heroes => this.answers = heroes)
         .catch(error => this.error = error);
    }


}
