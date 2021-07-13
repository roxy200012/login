import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile';
import { ProfileServiceService } from 'src/app/services/profile-service/profile-service.service';

@Component({
  selector: 'app-info-aziendali',
  templateUrl: './info-aziendali.component.html',
  styleUrls: ['./info-aziendali.component.scss']
})
export class InfoAziendaliComponent implements OnInit {
  datiAzienda: Profile
  ifDisableDati: boolean = true;
  ifDisableCre: boolean = true;
  constructor(private service: ProfileServiceService) { }

  ngOnInit(): void {
    this.service.getAzienda(1).subscribe(data =>{
     this.datiAzienda = data;
     console.log(this.datiAzienda)
    })
  }

  isDisableDati(){
    if(this.ifDisableDati){
      this.ifDisableDati = false;
      document.getElementById("Datibtn").innerHTML = "Salva Dati"
     console.log(this.datiAzienda)


    }
    else{
      this.ifDisableDati = true;
      document.getElementById("Datibtn").innerHTML = "Modifica Dati"
     console.log(this.datiAzienda)

      this.service.modifyAzienda(this.datiAzienda).subscribe(data=>{
        console.log("test",data)
      });
     console.log(this.datiAzienda)

    }
  }

  isDisableCre(){
    if(this.ifDisableCre){
      this.ifDisableCre = false;
      document.getElementById("Crebtn").innerHTML = "Salva Credenziali"
    }
    else{
      this.ifDisableCre = true;
      document.getElementById("Crebtn").innerHTML = "Modifica Credenziali"
    }
  }
}
