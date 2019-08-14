import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelListComponent } from './components/travel-list/travel-list.component';
import { TravelTrackerService } from './travel-tracker.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TravelTotalPipe } from './pipes/travel-total.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TravelListComponent,
    TravelTotalPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    TravelTrackerService,
    TravelTotalPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
