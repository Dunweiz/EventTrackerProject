export class Travel {
  id: number;
  name: string;
  distance: number;
  desc: string;
  vehicle: string;

  constructor(
    id?: number,
    name?: string,
    distance?: number,
    desc?: string,
    vehicle?: string
  ) {
    this.id = id;
    this.distance = distance;
    this.name = name;
    this.desc = desc;
    this.vehicle = vehicle;

  }

}
