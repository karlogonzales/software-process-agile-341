import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getQuestions(): Observable<any> {
    return this.http.get('/questions').map(res => res.json());
  }

  addQuestion(question): Observable<any> {
    return this.http.post('/question', JSON.stringify(question), this.options);
  }

  editQuestion(question): Observable<any> {
    return this.http.put(`/question/${question._id}`, JSON.stringify(question), this.options);
  }

  deleteQuestion(question): Observable<any> {
    return this.http.delete(`/question/${question._id}`, this.options);
  }

}
