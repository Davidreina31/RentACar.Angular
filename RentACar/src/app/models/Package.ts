import { Desktop } from "./Desktop";

export class Package {
    package_Id: string;
    price: number;
    km_Limit: number;
    desktop_Start_Id: string;
    desktop_Start: Desktop;
    desktop_End_Id: string;
    desktop_End: Desktop;
}
