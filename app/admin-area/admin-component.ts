import { Component, Input, OnInit} from '@angular/core';
import { AnswerService } from '../services/answer.service';
import { Answer } from '../models/answer';

@Component ({
    selector: 'admin-area',
    templateUrl: 'app/admin-area/admin-component.html',
    styleUrls: ['app/admin-area/admin-component.css'],
    providers: [ AnswerService ]
})

export class AdminComponent implements OnInit
{
    myTitle = 'Admin Stuff';
    pick = 'Pick things to compare';
    error: any;
    answers: Answer[] =[];
    dates: number[] = [];
    times: string[] = [];
    months: number[] = [];



    constructor(private answerService: AnswerService)
      {}

      getAnswers()
      {
        this.answerService
           .getAnswers()
           .then(heroes => this.answers = heroes)
           .catch(error => this.error = error);

      }

          fill(){
            var i:number;
            for( i = 1 ; i<= 31; i++)
            {
              console.log(i);
              this.dates.push(i );

            }

            var j:number;
            for( j = 1 ; j<= 24; j++)
            {
              console.log(j);
              this.times.push(j + ':00');

            }

              this.months.push('january');
              this.months.push('feburary');
              this.months.push('march');
              this.months.push('april');




          }

      ngOnInit()
      {
          this.getAnswers();
          this.fill();
      }


}
