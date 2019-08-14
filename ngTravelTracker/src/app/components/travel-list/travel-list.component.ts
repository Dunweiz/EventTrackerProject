import { TravelTotalPipe } from './../../pipes/travel-total.pipe';
import { TravelTrackerService } from './../../travel-tracker.service';
import { Component, OnInit } from '@angular/core';
import { Travel } from 'src/app/models/travel';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css']
})
export class TravelListComponent implements OnInit {

  selected = null;

  travels: Travel[] = [];

  editTravel: Travel = null;

  newTravel: Travel = new Travel();

  travelUpdate: Travel = null;

  constructor(
    private travelSrv: TravelTrackerService,
    private totalTravel: TravelTotalPipe
  ) { }

  ngOnInit() {
    this.loadTravels();
  }

  loadTravels() {
    this.travelSrv.ListTravels().subscribe(
      good => {
        this.travels = good;
      },
      bad => {
        console.log('TravelListComponent.loadTravels() - Error.');
        console.error(bad);
      }
    );
  }

  travelCountColor(): string  {
    if (this.getTotalDistanceTraveled() >= 20000) {
      return 'red';
    } else if (this.getTotalDistanceTraveled() >= 10000) {
      return 'yellow';
    } else {
      return 'green';
    }
  }

  showTravel(travel: Travel) {
    this.selected = travel;
  }

  getTotalDistanceTraveled = function() {
    return this.totalTravel.transform(this.travels);
  };

  showTable = function()  {
    this.selected = null;
  };

  setEditTravel() {
    this.editTravel = Object.assign({}, this.selected);
  }
  addTravel() {
    this.travelSrv.create(this.newTravel).subscribe(
      good => {
        console.log(good);
      },
      bad => {
        console.log(bad);
      },
      () => {
        this.loadTravels();
        this.newTravel = new Travel();
      }
    );
  }
  deleteTravel(id: number) {
    this.travelSrv.destroy(id).subscribe(
      good => {
        console.log(good);
      },
      bad => {
        console.error(bad);
      },
      () => {
        this.loadTravels();
        this.selected = null;
        this.editTravel = null;
      }
    );
    this.loadTravels();
  }

  updateTravel(travel: Travel) {
    this.travelSrv.updateTravel(travel.id, travel).subscribe(
      good => {
        console.log(good);
        this.ngOnInit();
      },
      bad => {
        console.error(bad);
      },
      () => {
        this.editTravel = null;
        this.selected = null;
        this.loadTravels();
      }
    );
  }

  travelVehicle(travel) {
    if (travel === 'Honda Civic') {
      return 'civic';
    }
    if (travel === 'Toyota Camry') {
      return 'camry';
    }
    if (travel === 'Ford Mustang') {
      return 'mustang';
    }
    if (travel === 'Ford F150') {
      return 'f150';
    }
    if (travel === 'Honda Accord') {
      return 'accord';
    }
    if (travel === 'Jeep Wrangler') {
      return 'wrangler';
    }
    if (travel === 'BMW X5') {
      return 'X5';
    }
    if (travel === 'Mercedes A-Class') {
      return 'A-Class';
    }
    if (travel === 'Chrysler 300') {
      return 'C300';
    }
    if (travel === 'Chevrolet Silverado') {
      return 'silverado';
    }

  }
}
