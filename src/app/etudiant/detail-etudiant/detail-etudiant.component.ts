import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Etudiant} from '../../model/etudiant';
import {EtudiantService} from '../../services/etudiant.service';

@Component({
  selector: 'app-detail-etudiant',
  templateUrl: './detail-etudiant.component.html',
  styleUrls: ['./detail-etudiant.component.scss']
})
export class DetailEtudiantComponent implements OnInit {

  id: number;
  etudiant: Etudiant;

  constructor(private route: ActivatedRoute, private router: Router,
              private etudiantService: EtudiantService) {
  }

  ngOnInit() {
    this.etudiant = new Etudiant();

    this.id = this.route.snapshot.params.id;

    this.etudiantService.getEtudiant(this.id)
      .subscribe(data => {
        console.log(data);
        this.etudiant = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['list-etudiant']);
  }

}
