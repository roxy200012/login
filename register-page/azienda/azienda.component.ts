import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-azienda',
  templateUrl: './azienda.component.html',
  styleUrls: ['./azienda.component.scss']
})
export class AziendaComponent implements OnInit {
  azienda;
  r_sociale;
  iva;
  logo;
  change() {
    localStorage.setItem('nome azienda', this.azienda);
    localStorage.setItem('ragione sociale', this.r_sociale);
    localStorage.setItem('iva', this.iva);
    localStorage.setItem('logo', this.logo);
    this.router.navigate(["/register/position"]);
  }
  /* return() {
    window.location.replace('/register/referente');
  } */
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
