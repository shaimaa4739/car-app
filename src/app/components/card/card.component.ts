import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() car!: Car

  constructor(private router: Router){

  }

  goDetails(id: number){
    this.router.navigateByUrl(`cars-details/${id}`)
  }

}
