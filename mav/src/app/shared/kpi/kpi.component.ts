import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.sass']
})
export class KpiComponent implements OnInit {

  title:string;
  values:any;
  period:string;
  constructor() { }


  ngOnInit(): void {
  }

}
