import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

  @Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
  })
  export class HomeComponent {
    title = 'app';
  finishDate = 'December 31, 2019 00:00';
  isCustomTemplate = true;
  days;
  hours;
  minutes;
  seconds;
  backgroundColor = 'red';
  textColor = 'black';

onDaysChanged(days) {
this.days  =  days;
}

onHoursChanged(hours) {
this.hours  =  hours;
}

onMinutesChanged(minutes) {
this.minutes  =  minutes;
}

onSecondsChanged(seconds) {
this.seconds  =  seconds;
}
  }
