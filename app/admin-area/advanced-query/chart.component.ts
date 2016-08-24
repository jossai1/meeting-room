import {Component} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import { SharedService } from '../../services/shared-service.service';

import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

// webpack html imports
//let template = require('./bar-chart-demo.html');

@Component({
  selector: 'bar-chart-demo',
  templateUrl: 'app/admin-area/advanced-query/chart.component.html',
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class BarChartDemoComponent {
  red:number =  0;
  green:number= 0;
  amber:number= 0;


  constructor(private sharedService: SharedService )
  {  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Negative', 'Neutral',"Positive",''];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [this.sharedService.getRed(),this.sharedService.getAmber(),this.sharedService.getGreen(),0], label:'Responses'}
  ];

  private barChartColors: any[] = [{ backgroundColor: [ "#f44336", "#ffc107","#4caf50", "#ffc107"] }];

refresh(){
  // this.red= this.sharedService.getRed();
  // this.green = this.sharedService.getGreen();
  // this.amber = this.sharedService.getAmber();


  let _barChartData =[
    {data: [this.sharedService.getRed(),this.sharedService.getAmber(),this.sharedService.getGreen(),0], label:'Responses'}

  ];
  console.log(_barChartData);

this.barChartData = _barChartData;
  //returns [2,3,3] data[] arr
  // this.barChartData[0].data[0] = this.sharedService.getRed();
  // this.barChartData[0].data[1] = this.sharedService.getGreen();
  // this.barChartData[0].data[2] = this.sharedService.getAmber();

  //console.log("jijii"+this.barChartData[0].data[0]);

}
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
