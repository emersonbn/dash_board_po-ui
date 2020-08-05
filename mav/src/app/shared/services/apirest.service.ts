import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, pipe, empty } from 'rxjs';
import { tap, retry, catchError, take } from 'rxjs/operators';
import { Result } from '../models/chartsconfigs/result';
import { KPI } from '../models/chartsconfigs/kpi';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {

  url = 'http://localhost:3000/'; // api rest fake

  kpis: KPI[];
  constructor(private httpClient: HttpClient) {

    this.kpis = [];
  //    this.loadKpis();
  console.log('ApirestService');
  }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


  getKpiGauge(id: string, typeValue: string) {
    if (this.kpis.length == 0) {
      this.loadKpis();
      return this.kpis.filter(e => { return e.id == id })[0][typeValue];
    } else {
      return this.kpis.filter(e => { return e.id == id })[0][typeValue];
    }
  }
  getKpis(): Observable<any> {
    return new Observable<any>((observ) => {
      if (this.kpis.length > 0) {
        observ.next(this.kpis)
      } else {
        this.loadKpis().subscribe(kpis => {
          if(typeof(kpis) != 'undefined')
          setTimeout(() => {
            observ.next(this.kpis);
          }, 5000)
            
        })
      }

    })
  }

  loadKpis(): any {
    return this.httpClient.get(this.url + "kpis").pipe(
      tap((data: any[]) => {
        console.log('TAP>' + data);
        Object.keys(data).forEach(key => {
          //  console.log(key, data[key]);
          data[key].id = key;
          this.kpis.push(data[key]);
        })
      }
      ),
      take(2),
      catchError(error => {
        console.log(error);
        return empty
      }))

  }
}
