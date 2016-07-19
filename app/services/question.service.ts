import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import { Question } from '../models/question';

import 'rxjs/add/operator/toPromise';



@Injectable()
export class QuestionService
{
  private questionUrl = 'http://localhost:8080/api/questions';
  private theQuestionUrl = 'http://localhost:8080/api/get-q';  // URL to web api

  constructor(private http: Http) {}

  getQuestions(): Promise<Question[]>
  {
    return this.http.get(this.questionUrl)
                 .toPromise()
                 .then(response => response.json())
                 .catch(this.handleError);
  }

  //get a questuion that nmatches the given QID
  getAQuestion(q_id:string): Promise<Question>
  {
    console.log('getting question...');
    let body = JSON.stringify({q_id});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.theQuestionUrl, body, options)
               .toPromise() //chnaged to the res.json instaed of extract data
               .then(response => response.json())
               .catch(this.handleError);
  }

  private handleError(error: any)
  {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
  }

}
