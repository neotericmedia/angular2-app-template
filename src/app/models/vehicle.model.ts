export class Vehicle {
  constructor(
    public id: number,
    public year: string,
    public make: string,
    public model: string,
    public primaryUse: string,
    public commutingMiles: number,
    public annualMileage: number,
    public vinObtained: boolean,
    public vin: string,
    public purchaseYear: number,
    public purchaseMonth: number,
    public antiTheftDevices: string,
    public winterTires: boolean
  ) {  }
}
