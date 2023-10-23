import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {

  message: string = 'Vous êtes déconnecté. (admin/admin)';
  name: string = '';
  password: string = '';
  auth: AuthService;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.auth = this.authService;
  }

  setMessage() {
    if (this.authService.isLoggedIn) {
      this.message = 'Vous êtes connecté.';
    } else {
      this.message = 'Identifiant ou mot de passe incorrect.';
    }
  }

  login() {
    this.message = 'Tentative de connexion en cours ...';
    this.authService.login(this.name, this.password)
      .subscribe((isLoggedIn: boolean) => {
        if (isLoggedIn) {
          this.setMessage();
          const redirectUrl = '/pokemons';
          this.router.navigate([redirectUrl]);
        } else {
          this.setMessage();
          this.password = '';
          const redirectUrl = '/login';
          this.router.navigate([redirectUrl]);
        }
      });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
