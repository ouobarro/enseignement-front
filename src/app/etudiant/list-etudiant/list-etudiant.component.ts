import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {Etudiant} from '../../model/etudiant';
import {EtudiantService} from '../../services/etudiant.service';


@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.scss']
})
export class ListEtudiantComponent implements OnInit {

  etudiants: Observable<Etudiant[]>;

  constructor(
    private etudiantService: EtudiantService,
    private router: Router
  ) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.etudiants = this.etudiantService.getEtudiantsList();
   // console.log('Liste des étudiants: ', this.etudiants);
  }

  deleteEtudiant(id: number) {
    this.etudiantService.deleteEtudiant(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  detailEtudiant(id: number) {
    this.router.navigate(['detail-etudiant', id]);
  }

}
