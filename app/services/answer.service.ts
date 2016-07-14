import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Answer } from '../models/answer';



@Injectable()
export class AnswerService {
private heroesUrl = 'http://localhost:8080/api/answers';  // URL to web api


constructor(private http: Http) { }

getAnswers(): Promise<Answer[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  private extractData(res: Response) {
  let body = res.json();
  return body.data || { };
}


  logVote(questionID:string, response:string, time:string): Promise<Answer[]> {
    console.log('in here yass');
    let body = JSON.stringify({ questionID ,response,time });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.heroesUrl, body, options)
               .toPromise()
               .then(this.extractData)
               .catch(this.handleError);

    }

  private handleError(error: any) {
     console.error('An error occurred', error);
     return Promise.reject(error.message || error);
   }


}
