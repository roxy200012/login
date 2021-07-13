import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from 'src/app/models/profile';
import { ProfileServiceService } from '../../../services/profile-service/profile-service.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  email;
  password;
  constructor(private service: ProfileServiceService, private route: ActivatedRoute,
    private router: Router,) { }
  getData() {
    localStorage.removeItem("token")
    this.service.loginAzienda(this.email, this.password).subscribe(data => {
      if (data.token != "error") {
        console.log(data)
        localStorage.setItem("token", data.token)
        this.router.navigate(["/"]);
      }
    });

    console.log(this.email, this.password)
  }
  ngOnInit(): void {
  }

}
