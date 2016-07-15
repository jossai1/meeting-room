import { Component, Input, OnInit} from '@angular/core';
import { AnswerService } from '../services/answer.service';
import { Answer } from '../models/answer';
import { DerpPipe } from './unique.pipe';
import 'rxjs/Rx';


@Component ({
    selector: 'admin-area',
    templateUrl: 'app/admin-area/admin-component.html',
    styleUrls: ['app/admin-area/admin-component.css'],
    providers: [ AnswerService ],
    pipes: [DerpPipe]
})

export class AdminComponent implements OnInit
{
    myTitle = 'Admin Stuff';
    pick = 'Pick things to compare';
    error: any;
    answers: Answer[] =[];
    dates: number[] = [];
    times: string[] = [];
    months: string[] = [];
    arr:string[] = [];
    answersTime: Answer[] =[];
    uniqTimes: string []= [];
    selectedDate:string;

    //edited :boolean = true;



    constructor(private answerService: AnswerService)
    {}


    ngOnInit()
    {
        this.getAnswers();
        //this.fill();
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

    finalQuery(i:number)

    {
      var finalTime: string;
      console.log( this.uniqTimes[i] + this.selectedDate );

      finalTime = this.uniqTimes[i].split(":")[0] + ".0";
      console.log(  finalTime);
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
