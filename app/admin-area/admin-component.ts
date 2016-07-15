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
    dates: number[] = [];
    times: string[] = [];
    months: string[] = [];
    arr:string[] = [];
    answersTime: Answer[] =[];
    uniqTimes: string []= [];
    selectedDate:string;
    red:number = 0;
    green:number=0;
    amber:number=0;
    question: Question;


    //edited :boolean = true;



    constructor(private answerService: AnswerService,private questionService: QuestionService)
    {}


    ngOnInit()
    {
        this.getAnswers();
        //this.fill();
    }

    getAQuestion(q_id:string)
    {
      this.questionService
         .getAQuestion(q_id)
         .then(q => this.question = q)
         .catch(error => this.error = error);

    }

    getDates()
    // change for for loops to filters (ac to show jane)
    {
        for(var i =0 ; i < this.answers.length;i++)
        {
          if(  this.answers[i].date == undefined )
          { /*do nothing */}
          else
          {
              this.arr[i] = this.answers[i].date;
          }

          console.log(this.arr[i]);

        }
        this.arr =  Array.from(new Set(this.arr));
        //removing undefined stuff
        this.arr = this.arr.filter(function(n){ return n != undefined });
        //this.fill();
    }


    tally()
    {
      //so value doesnt change each time i click
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
         if(this.results[0] == undefined)
         {
           this.question = 'loading..';
         }
         else{this.getAQuestion(this.results[0].questionID)};
           //this.processTimes();
    }



    processTimes()
    {

      console.log('i made it o');
      //uniqTimes;
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
    /** envoked by a date button-  should return all times things were recorded in the selected date */
    getTimes(i:number)
    {
      this.selectedDate = this.arr[i];
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



    fill()
    {
      // var i:number;
      // for( i = 1 ; i<= 31; i++)
      // {
      //   console.log(i);
      //   this.dates.push(i );
      //
      // }

      var j:number;
      for( j = 0; j<= 24; j++)
      {
        //console.log(j);
        this.times.push(j + ':00');

      }
        //
        // this.months.push('january');
        // this.months.push('feburary');
        // this.months.push('march');
        // this.months.push('april');
        //
    }


}
