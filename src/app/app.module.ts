import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEtudiantComponent } from './etudiant/create-etudiant/create-etudiant.component';
import { ListEtudiantComponent } from './etudiant/list-etudiant/list-etudiant.component';
import { DetailEtudiantComponent } from './etudiant/detail-etudiant/detail-etudiant.component';

import { EtudiantService } from './services/etudiant.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateEtudiantComponent,
    ListEtudiantComponent,
    DetailEtudiantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ EtudiantService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
