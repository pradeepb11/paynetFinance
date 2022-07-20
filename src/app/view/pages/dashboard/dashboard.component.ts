import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {


  FinanceData: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      { label: 'Payout', data: [1000, 1200, 1050, 2000, 500], tension: 0.5 },
      { label: 'TRANSACTION VOLUME', data: [200, 100, 400, 50, 90], tension: 0.5 },
      { label: 'SETTLEMENTS', data: [500, 400, 350, 450, 650], tension: 0.5 },
      // { label: 'Headset', data: [1200, 1500, 1020, 1600, 900], tension: 0.5 },

      
    ],
  
    
  };

  chartOptions: ChartOptions = {
    responsive: true,
    // maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Monthly Payout',
      },
      legend: {
        display: true,
        labels: {
            color: 'rgb(255, 99, 132)'
        }
    }
     
    },
    scales:{
      x:{
        grid:{
          display: false
        }
      },
      y:{
        grid:{
          display: false
        }
      }
    },
    
  }

  public chartColors: any[] = [
    { 
      backgroundColor:["#FF7360", "#6FC8CE", "#FAFFF2", "#FFFCC4", "#B9E8E0"] 
    }];



    public Users ={

    }
 
 

  constructor() { 

  //   if (window.innerWidth !== undefined && window.innerHeight !== undefined) {
  //     var w = window.innerWidth;
  //     console.log(w)

  // } else {
  //     var w = document.documentElement.clientWidth;

  // }

  // if(w>=768){
  //   console.log('768')
  // }else{
  //   console.log('sasas');
  //   chartOptions: ChartOptions = {
  //     responsive: true,
  //     maintainAspectRatio: false,


  //   }

  // }

  }



  ngAfterViewInit(): void {
     // feather icon
   
  }

  ngOnInit(): void {
  }

}
