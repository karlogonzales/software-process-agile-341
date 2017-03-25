import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastComponent } from '../shared/toast/toast.component';
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

  addQuestionForm: FormGroup;
  name = new FormControl('', Validators.required);
  a_Answer = new FormControl('', Validators.required);
  b_Answer = new FormControl('', Validators.required);
  c_Answer = new FormControl('', Validators.required);
  d_Answer = new FormControl('', Validators.required);
  a_Freq = new FormControl('', Validators.required);
  b_Freq = new FormControl('', Validators.required);
  c_Freq = new FormControl('', Validators.required);
  d_Freq = new FormControl('', Validators.required);

  constructor(private http: Http,
              private dataService: DataService,
              public toast: ToastComponent,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getQuestions();

    this.addQuestionForm = this.formBuilder.group({
      name: this.name,
      a_Answer: this.a_Answer,
      b_Answer: this.b_Answer,
      c_Answer: this.c_Answer,
      d_Answer: this.d_Answer,
      a_Freq: this.a_Freq,
      b_Freq: this.b_Freq,
      c_Freq: this.c_Freq,
      d_Freq: this.d_Freq
    });
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

    question.a_Freq = question. a_Freq + 1;
    this.dataService.editQuestion(question).subscribe(
      res => {
        this.question = question;
      },
      error => console.log(error)
    );
  }

  incrementFreqB(question) {

    question.b_Freq = question. b_Freq + 1;
    this.dataService.editQuestion(question).subscribe(
      res => {
        this.question = question;
      },
      error => console.log(error)
    );
  }

  incrementFreqC(question) {

    question.c_Freq = question. c_Freq + 1;
    this.dataService.editQuestion(question).subscribe(
      res => {
        this.question = question;
      },
      error => console.log(error)
    );
  }

  incrementFreqD(question) {

    question.d_Freq = question. d_Freq + 1;
    this.dataService.editQuestion(question).subscribe(
      res => {
        this.question = question;
      },
      error => console.log(error)
    );
  }


}
