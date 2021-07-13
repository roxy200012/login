import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/models/profile';
import { ProfileServiceService } from 'src/app/services/profile-service/profile-service.service';
import { ProfilePageComponent } from '../../profile-page/profile-page/profile-page.component';

@Component({
  selector: 'app-posizione',
  templateUrl: './posizione.component.html',
  styleUrls: ['./posizione.component.scss']
})
export class PosizioneComponent implements OnInit {
  newAzienda: Profile = new Profile()
  luogo;
  cap;
  via;
  
  constructor(private service:ProfileServiceService,private router: Router) { }
change(){
  this.newAzienda.mail=localStorage.getItem('email');
  this.newAzienda.nome_azienda=localStorage.getItem('nome azienda');
  this.newAzienda.partita_iva=localStorage.getItem('iva');
  this.newAzienda.password=localStorage.getItem('password');
  this.newAzienda.ragione_sociale=localStorage.getItem('ragione sociale');
  this.newAzienda.sede=this.cap+' '+this.luogo+' '+this.via;
  this.newAzienda.telefono=localStorage.getItem('tel');
  this.newAzienda.referente=localStorage.getItem('name')+ ' '+localStorage.getItem('surname');
  console.log(this.newAzienda)
  this.service.registerAzienda(this.newAzienda).subscribe(data =>{
    
    localStorage.setItem("token",data.token)
    this.router.navigate(["/"]);
  })
}
  ngOnInit(): void {
  }

  }
