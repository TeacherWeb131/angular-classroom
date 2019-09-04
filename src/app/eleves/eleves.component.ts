import { Component, OnInit } from '@angular/core';
import { Eleve } from '../eleve.interface';

@Component({
  selector: 'app-eleves',
  templateUrl: './eleves.component.html',
  styleUrls: ['./eleves.component.css']
})
export class ElevesComponent implements OnInit {
  eleve: Eleve = {
    id: 1,
    firstName: "bob",
    lastName: "leponge"
  }
  constructor() { }

  ngOnInit() {
  }

}
