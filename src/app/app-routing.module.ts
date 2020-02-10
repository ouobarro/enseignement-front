import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateEtudiantComponent } from './etudiant/create-etudiant/create-etudiant.component';
import { DetailEtudiantComponent } from './etudiant/detail-etudiant/detail-etudiant.component';
import { ListEtudiantComponent } from './etudiant/list-etudiant/list-etudiant.component';


const routes: Routes = [
  { path: '', redirectTo: 'list-etudiant', pathMatch: 'full' },
  { path: 'create-etudiant', component: CreateEtudiantComponent },
  { path: 'detail-etudiant/:id', component: DetailEtudiantComponent },
  { path: 'list-etudiant', component: ListEtudiantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
