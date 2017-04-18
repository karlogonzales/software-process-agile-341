import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ToastComponent } from '../shared/toast/toast.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-barchart',
  templateUrl: 'chart.component.html',
  styleUrls: ['chart.component.css']
})
export class ChartComponent implements OnInit {
  questions = [];
  isLoading = true;
  question = {};
  questionIndex = 0;

  constructor(private http: Http,
              private dataService: DataService,
              public toast: ToastComponent) { }

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

  switchChart(){
    if(this.chartType =='pie')
      this.chartType = 'bar'
    else
      this.chartType ='pie'
  }


  public chartOptions:any = {
    responsive: true,
    maintainAspectRatio: false
  };




  public chartType:string = 'pie';

  public chartLegend:boolean = true;



  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }


}
