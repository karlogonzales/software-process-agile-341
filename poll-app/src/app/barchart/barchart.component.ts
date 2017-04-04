import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastComponent } from '../shared/toast/toast.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  questions = [];
  isLoading = true;
  question = {};

  questionIndex = 0;
  constructor(private http: Http,
              private dataService: DataService,
              public toast: ToastComponent,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.dataService.getQuestions().subscribe(
      data => this.questions = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  calculatePercent(question, option) {
    var total = question.a_Freq + question.b_Freq + question.c_Freq + question.d_Freq;

    return Number(option / total * 100).toFixed(0);
  }

  nextQuestion(){
    this.getQuestions();
    this.questionIndex++;
  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };


  public barChartType:string = 'pie';
  public barChartLegend:boolean = true;



  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }


}
