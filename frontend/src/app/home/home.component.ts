import { Component, OnInit } from '@angular/core';
import { PubService } from "app/shared/pub.service";
import { AuthService } from "app/shared/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	pubList = [];
  constructor(
    private pubService: PubService,
    private authService: AuthService
  ) {}

  ngOnInit() {
      this.pubService.getAll().subscribe(
        res => {
          console.log(res);
          this.pubList = res;
          this.pubList.forEach(element => {
            var tmp:any = {};
            tmp.name = element.professur;
            tmp.value = element.artikel;
            this.single.push(tmp);
            //slice weist gleiches Objekt zu, brauchen wir damit Angular merkt, dass wir was machen
            this.single = this.single.slice();
            console.log(this.single);
          });
			  }
		  );

}
    
  single:any[] = [];

  view: any[] = [700,400];

  showLegend = true;

  colorScheme = {
    domain: ['#5AA454','#A10A28','#C7B42C','#AAAAAA']
  }

  showLabels = true;
  explodeSlices = false;
  doughnut = false;

}
