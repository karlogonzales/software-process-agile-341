import { Component } from '@angular/core';
import {QuestionService} from '../../services/question.service';
import {Question} from '../../../Question';

@Component({
  moduleId: module.id,
  selector: 'questions',
  templateUrl: 'questions.component.html'
})

export class QuestionsComponent { 
    questions: Question[];
    title: string;
    
    constructor(private questionService:QuestionService){
        this.questionService.getQuestions()
            .subscribe(questions => {
                this.questions = questions;
            });
    }
    
    addQuestion(event){
        event.preventDefault();
        var newQuestion = {
            title: this.title,

        }
        
        this.questionService.addQuestion(newQuestion)
            .subscribe(task => {
                this.questions.push(task);
                this.title = '';
            });
    }
    
    deleteQuestion(id){
        var questions = this.questions;
        
        this.questionService.deleteQuestion(id).subscribe(data => {
            if(data.n == 1){
                for(var i = 0;i < questions.length;i++){
                    if(questions[i]._id == id){
                        questions.splice(i, 1);
                    }
                }
            }
        });
    }
    
    updateStatus(task){
        var _task = {
            _id:task._id,
            title: task.title,

        };
        
        this.questionService.updateStatus(_task).subscribe(data => {

        });
    }
}
