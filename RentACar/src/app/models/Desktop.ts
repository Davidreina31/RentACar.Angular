import { Car } from "./Car";
import { Country } from "./Country";

export class Desktop {
    desktop_Id: string;
    city: string;
    imageUrl: string;
    country_Id: string;
    country: Country;
    cars: Array<Car>;
}
