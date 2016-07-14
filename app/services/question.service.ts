import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Question } from '../models/question';

import 'rxjs/add/operator/toPromise';



@Injectable()
export class QuestionService
{
  private questionUrl = 'http://localhost:8080/api/questions';  // URL to web api

  constructor(private http: Http) {}

  getQuestions(): Promise<Question[]>
  {
    return this.http.get(this.questionUrl)
                 .toPromise()
                 .then(response => response.json())
                 .catch(this.handleError);
  }

  private handleError(error: any)
  {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
  }

}
