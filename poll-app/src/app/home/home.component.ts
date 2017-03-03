import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { ToastComponent } from '../shared/toast/toast.component';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  questions = [];
  isLoading = true;

  question = {};
  isEditing = false;

  addQuestionForm: FormGroup;
  name = new FormControl('', Validators.required);
  a_Answer = new FormControl('', Validators.required);
  b_Answer = new FormControl('', Validators.required);

  /*
  c_Answer = new FormControl('', Validators.required);
  d_Answer = new FormControl('', Validators.required);
  */

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
      /*
      c_Answer: this.c_Answer,
      d_Answer: this.d_Answer
      */
    });
  }

  getQuestions() {
    this.dataService.getQuestions().subscribe(
      data => this.questions = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addQuestion() {
    this.dataService.addQuestion(this.addQuestionForm.value).subscribe(
      res => {
        const newQuestion = res.json();
        this.questions.push(newQuestion);
        this.addQuestionForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  enableEditing(question) {
    this.isEditing = true;
    this.question = question;
  }

  cancelEditing() {
    this.isEditing = false;
    this.question = {};
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the questions to reset the editing
    this.getQuestions();
  }

  editQuestion(question) {
    this.dataService.editQuestion(question).subscribe(
      res => {
        this.isEditing = false;
        this.question = question;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  deleteQuestion(question) {
    if (window.confirm("Are you sure you want to permanently delete this item?")) {
      this.dataService.deleteQuestion(question).subscribe(
        res => {
          const pos = this.questions.map(elem => { return elem._id; }).indexOf(question._id);
          this.questions.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }

}
