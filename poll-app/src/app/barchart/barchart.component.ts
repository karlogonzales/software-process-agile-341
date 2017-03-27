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

  nextQuestion(){
    this.questionIndex++;
  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };


  public barChartType:string = 'bar';
  public barChartLegend:boolean = false;



  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }


}
