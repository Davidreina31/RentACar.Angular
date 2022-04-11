import { Desktop } from "./Desktop";

export class Car {
    car_Id: string;
    brand: string;
    model: string;
    type: string;
    price: number;
    isAvailable: boolean;
    km_Start: number;
    km_End?: number;
    imageUrl: string;
    desktop_Id: string;
    desktop: Desktop;
}
