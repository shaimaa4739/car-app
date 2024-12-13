import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { Car, CarResponseDetails, CarResponseList } from '../models/car';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchTerm: string='';
  carList: Car[]=[];
  paginatedList: Car[]=[];
  size = 4; 
  nextIndex = 0;

  constructor(private _carService: CarService){

  }

  ngOnInit(){
    this.getCars()
  }

  onSearchTermChange(term: string) {
    this.searchTerm = term;
  }

  getCars(){
    this._carService.getCarList()
    .subscribe(
      (res :CarResponseList)=>{
        if(res.cars){
          this.carList = res.cars
          this._carService.updateList(this.carList)
          this.showMore(this.carList, this.size, this.nextIndex)
          this.nextIndex += this.size;
        } else {
          this.paginatedList = [];
        }
      }
    )
  }

  showMore(list: Car[], size: number, index: number){
    if(list){
      const newList = list.slice(index, index + size)
      this.paginatedList = [...this.paginatedList, ...newList];
      this.paginatedList.forEach(item=> item.img = '../../assets/imgs/assignment-images/imges/landing-page/car3.png')
    }
  }



}
