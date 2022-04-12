import { Car } from "./Car";
import { Desktop } from "./Desktop";
import { Package } from "./Package";

export class Trip {
    trip_Id: number;
    client_FirstName: string;
    client_LastName: string;
    client_Email: string;
    date_Start: Date;
    date_End: Date;
    isPackage: boolean;
    price: number;
    discount: number;
    penalty: number;
    isTripDone: boolean;
    car_Id: string;
    car: Car;
    desktop_Start_Id: string;
    desktop_Start: Desktop;
    desktop_End_Id?: string;
    desktop_End?: Desktop;
    package_Id?: string;
    package: Package;

    createdOn?: Date;
}
