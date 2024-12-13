import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../services/car.service';
import { Car, CarResponseDetails } from '../models/car';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {

  carId:string='';
  car!: Car;
  constructor(private route:ActivatedRoute,private _carService: CarService){

  }

  ngOnInit(){
    this.getCarID()
  }

  getCarID(){
    this.route.params
    .subscribe(
      (res:any)=>{
        if(res){
          this.carId = res.id
          this.getCardDetailsById()
        }
      }
    )
  }

  getCardDetailsById(){
    this._carService.getCarDetails(this.carId)
    .subscribe(
      (res: CarResponseDetails)=>{
        this.car=res.Car
      }
    )
  }

}
