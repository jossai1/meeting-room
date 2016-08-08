import { Component, Input, OnInit} from '@angular/core';
import { AnswerService } from '../../services/answer.service';
import { QuestionService } from '../../services/question.service';
import { Answer } from '../../models/answer';
import { Question } from '../../models/question';
import 'rxjs/Rx';

@Component ({
    selector: 'advanced-query',
    templateUrl: 'app/admin-area/advanced-query/advanced-query.component.html',
    styleUrls: ['app/admin-area/advanced-query/advanced-query.component.css'],
    providers: [ AnswerService, QuestionService ]

})

export class AdvancedQueryComponent implements OnInit
{
  startTime:number;
  endTime:number;
  date:string;
  mtgRoom:string; //ngModel
  results: Answer[] =[];
  error:any;
  red:number = 0;
  green:number=0;
  amber:number=0;
  isClicked:boolean = false;


  constructor(private answerService: AnswerService,private questionService: QuestionService)
  {  }


  ngOnInit()
  {


  }
  //displays/updates the g,r,a counts
  tallySurveyAnswers()
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

  submit()
  {
       setTimeout(() => {
         this.answerService
            .advancedQuery(this.date, this.endTime,this.startTime, this.mtgRoom)
            .then(result => this.results = result)
            .catch(error => this.error = error);
         setTimeout(() => {
            this.tallySurveyAnswers();
            this.isClicked = true;
         }, 50);
       }, 100);
  }



}
