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
  public barChartLabels:string[] = ['MtgName', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [this.red], label:'Series A'},
    {data: [this.green], label:'Series B'},
    {data: [this.amber], label:'Series C'}

  ];

refresh(){
  // this.red= this.sharedService.getRed();
  // this.green = this.sharedService.getGreen();
  // this.amber = this.sharedService.getAmber();
   this.barChartData = [
    {data: [this.sharedService.getRed()], label:'Series A'},
    {data: [this.sharedService.getGreen()], label:'Series B'},
    {data: [this.sharedService.getAmber()], label:'Series C'}

  ];

}
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
