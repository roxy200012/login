import { Component, OnInit } from '@angular/core';
import { SidebarProfilePageComponent } from '../component/sidebar-profile-page/sidebar-profile-page.component';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  valore: number = 1;



  constructor() { 
  }

  ngOnInit(): void {
  }

  changePage(num: number){
    switch (num) {
      case 1:
        this.valore = 1;
        break;
      
      case 2:
        this.valore = 2;
        break;

      case 3:
        this.valore = 3;
        break;

      case 4:
        this.valore = 4;
        break;
    
      default:
        break;
    }
  }
}
