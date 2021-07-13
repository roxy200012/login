import {  Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-access',
  templateUrl: './register-access.component.html',
  styleUrls: ['./register-access.component.scss']
})
export class RegisterAccessComponent implements OnInit {
  email;
  password;
  password3;
  
  constructor() { }
   change(){
    if(confirm){
      if(this.password=this.password3){ 
     localStorage.setItem('email',this.email);
     localStorage.setItem('password',this.password);
     window.location.assign('/register/referente');
      }
     
    }
   }
  ngOnInit(): void {
   
    
  
  }

}
