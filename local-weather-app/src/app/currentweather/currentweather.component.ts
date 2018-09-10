import { Component, OnInit } from '@angular/core';
import { Icurrentweather } from '../icurrentweather';


@Component({
  selector: 'app-currentweather',
  templateUrl: './currentweather.component.html',
  styleUrls: ['./currentweather.component.css']
})
export class CurrentweatherComponent implements OnInit {
  current: Icurrentweather;

  constructor() {
    this.current = {
      city: 'Redmond',
      country: 'US',
      date: new Date(),
      image:'',
      temperature: 72,
      description: 'Sunny',
      
    }
    ;
   }

  ngOnInit() {
  }

}
