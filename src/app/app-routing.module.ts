import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarDetailsComponent } from './car-details/car-details.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'cars',
    component: CarListComponent,
  },
  {
    path:'cars-details/:id',
    component: CarDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
