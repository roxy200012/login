import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referente',
  templateUrl: './referente.component.html',
  styleUrls: ['./referente.component.scss']
})
export class ReferenteComponent implements OnInit {
  nome;
  cognome;
  email1;
  tel;
  constructor() { }
  change(){
    
    if(confirm){
      if(this.email1.length>0)
      localStorage.setItem('nome',this.nome);
      localStorage.setItem('cognome',this.cognome);
      localStorage.setItem('tel',this.tel);
      localStorage.setItem('email1',this.email1);
      window.location.assign('/register/azienda');
    }
    
 }

  ngOnInit(): void {
  }

}
