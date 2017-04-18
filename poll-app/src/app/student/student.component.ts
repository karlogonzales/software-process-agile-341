import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  questions = [];
  isLoading = true;
  currentQuestionNumber = 0;
  question = {};
  constructor(private http: Http,
              private dataService: DataService) { }

  ngOnInit() {
    this.getQuestions();
  }


  getQuestions() {
    this.dataService.getQuestions().subscribe(
      data => this.questions = data,
      error => console.log(error),
    );
    this.isLoading = false
  }


goToNextQuestion()
  {
      this.currentQuestionNumber++;
  }

  incrementFreqA(question) {
    this.getQuestions()
    question.a_Freq = question.a_Freq + 1;
    this.dataService.editQuestion(question).subscribe(
      res => {
        this.question = question;
      },
      error => console.log(error)
    );
  }

  incrementFreqB(question) {
    this.getQuestions()
    question.b_Freq = question.b_Freq + 1;
    this.dataService.editQuestion(question).subscribe(
      res => {
        this.question = question;
      },
      error => console.log(error)
    );
  }

  incrementFreqC(question) {
    this.getQuestions()
    question.c_Freq = question. c_Freq + 1;
    this.dataService.editQuestion(question).subscribe(
      res => {
        this.question = question;
      },
      error => console.log(error)
    );
  }

  incrementFreqD(question) {
    this.getQuestions()
    question.d_Freq = question. d_Freq + 1;
    this.dataService.editQuestion(question).subscribe(
      res => {
        this.question = question;
      },
      error => console.log(error)
    );
  }


}
