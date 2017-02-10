import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuestionService{
    constructor(private http:Http){
        console.log('Question Service Initialized...');
    }
    
    getQuestions(){
        return this.http.get('/api/questions')
            .map(res => res.json());
    }
    
    addQuestion(newQuestion){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/question', JSON.stringify(newQuestion), {headers: headers})
            .map(res => res.json());
    }
    
    deleteQuestion(id){
        return this.http.delete('/api/question/'+id)
            .map(res => res.json());
    }
    
    updateStatus(question){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/question/'+question._id, JSON.stringify(question), {headers: headers})
            .map(res => res.json());
    }
}