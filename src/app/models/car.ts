export interface CarResponseList{
    cars: Car[]
}
export interface CarResponseDetails{
    Car: Car
}
export interface Car {
    id:number;
    img: string;
    car:string;
    car_model:string;
    car_color:string;
    car_model_year:number;
    car_vin:string;
    price:string;
    availability:boolean;
}
