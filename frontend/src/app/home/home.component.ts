import { Component, OnInit } from '@angular/core';
import { single } from './dummydaten';
import { PubService } from "app/shared/pub.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	pubList = [];

  constructor(
    private pubService: PubService
  ) {}

  ngOnInit() {
      this.pubService.getAll().subscribe(
			res => {
				console.log(res);
				this.pubList = res;
			}
		);
  }

  single:any[] = single;

  view: any[] = [700,400];

  showLegend = true;

  colorScheme = {
    domain: ['#5AA454','#A10A28','#C7B42C','#AAAAAA']
  }

  showLabels = true;
  explodeSlices = false;
  doughnut = false;

}
