import { Component } from '@angular/core';
import { CarService } from '../services/car.service';
import { Car } from '../models/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent {
  carList: Car[]=[]
  searchTerm: string='';
  paginatedList: Car[]=[];
  size = 8; 
  nextIndex = 0;
  previousIndex = 0; 
  currentPage = 0;

  constructor(private _carService: CarService){

  }

  ngOnInit(){
    this.getCars()
  }

  // Fetch car data from the shared observable service
  getCars() {
    this._carService.sharedCarList$
      .subscribe((res: Car[]) => {
        this.carList = res;
        this.updatePage(); // Load the first page initially
      });
  }

  // Update the paginated list based on the current page
  updatePage() {
    const startIndex = this.currentPage * this.size;
    const endIndex = startIndex + this.size;
    this.paginatedList = this.carList.slice(startIndex, endIndex);
    this.paginatedList.forEach(item => item.img = '../../assets/imgs/assignment-images/imges/landing-page/car3.png');
  }

  // Show next page of data
  showNext() {
    if (this.currentPage * this.size < this.carList.length) {
      this.currentPage++;
      this.updatePage();
    }
  }

  // Show previous page of data
  showPrevious() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updatePage();
    }
  }


  onSearchTermChange(term: string) {
    this.searchTerm = term;
  }

}
