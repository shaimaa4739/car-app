import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Car, CarResponseDetails, CarResponseList } from '../models/car';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private sharedCarList = new BehaviorSubject<any>(null);
  sharedCarList$ = this.sharedCarList.asObservable();
  

  constructor(private http: HttpClient) { }

  updateList(newData: any) {
    this.sharedCarList.next(newData);
  }

  getCarList(): Observable<CarResponseList> {
    return this.http.get<CarResponseList>('https://myfakeapi.com/api/cars/')
  }

  getCarDetails(id: string): Observable<CarResponseDetails> {
    return this.http.get<CarResponseDetails>(`https://myfakeapi.com/api/cars/${id}`)
  }
}
