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
  listeJahre =[];
  listeProfessur = [];
  legendTitle="Legende";
  constructor(
    private pubService: PubService,
    private authService: AuthService
  ) {}

  ngOnInit() {
      this.pubService.getAll().subscribe(
        res => {
          this.pubList = res;
          this.PieFormat(this.pubList, "professur");
          this.listeJahre = [...new Set(this.pubList.map(item=>item.jahr))];
          this.listeProfessur = [...new Set(this.pubList.map(item=>item.professur))];
        }
		  );

}

  PieFormat(liste, key){
      this.daten = []
      liste.forEach(element => {
        var tmp:any = {};
        tmp.name = element[key];
        tmp.value = element.artikel;
        this.daten.push(tmp);
        //slice weist gleiches Objekt zu, brauchen wir damit Angular merkt, dass wir was machen
        this.daten = this.daten.slice();
      });
  }

  filterNachProfessurArray = []
  filterNachProfessur(professur){
    this.filterNachProfessurArray = this.pubList.filter(item => item.professur == professur)
    this.PieFormat(this.filterNachProfessurArray,"jahr");
    this.legendTitle = professur;
  }

 filterNachJahrArray = []
  filterNachJahr(jahr){
    this.filterNachJahrArray = this.pubList.filter(item => item.jahr == jahr)
    this.PieFormat(this.filterNachJahrArray,"professur")
    this.legendTitle = jahr;
  }

  filterAlle(){
    this.PieFormat(this.pubList, "professur");
    this.legendTitle = "Legende";
  }

  daten:any[] = [];

  view: any[] = [700,400];

  showLegend = true;

  colorScheme = {
    domain: ['#5AA454','#A10A28','#C7B42C','#AAAAAA']
  }

  showLabels = true;
  explodeSlices = false;
  doughnut = false;


}
