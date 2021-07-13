import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfilePageComponent } from '../../profile-page/profile-page.component';


@Component({
  selector: 'app-sidebar-profile-page',
  templateUrl: './sidebar-profile-page.component.html',
  styleUrls: ['./sidebar-profile-page.component.scss']
})
export class SidebarProfilePageComponent implements OnInit {

  constructor(public Profile : ProfilePageComponent, public router:Router) {
    changePage : Profile.changePage

   }
  Color1 = "#E20613"
  Color2 = "#404040"
  Color3 = "#404040"
  Color4 = "#404040"
  numero : number

  ngOnInit(): void {
  }

  change( pos : number ){
    this.numero = pos
    switch (pos) {
      case 1:
        this.Color1 = "#E20613"
        this.Color2 = "#404040"
        this.Color3 = "#404040"
        this.Color4 = "#404040"
        this.Profile.changePage(1)
        break;
      
      case 2:
        this.Color1 = "#404040"
        this.Color2 = "#E20613"
        this.Color3 = "#404040"
        this.Color4 = "#404040"
        this.Profile.changePage(2)
        break;

      case 3:
        this.Color1 = "#404040"
        this.Color2 = "#404040"
        this.Color3 = "#E20613"
        this.Color4 = "#404040"
        this.Profile.changePage(3)
        break;

      case 4:
        this.Color1 = "#404040"
        this.Color2 = "#404040"
        this.Color3 = "#404040"
        this.Color4 = "#E20613"
        this.Profile.changePage(4)
        break;

      default:
        break;
    }
  }

  logOut(){
    localStorage.removeItem("token")
    this.router.navigate(["/"])
  }
}
