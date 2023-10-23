import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  redirectUrl: string;

  constructor() { }

  login(name: string, password: string): Observable<boolean> {
    const isLoggedIn = (name === 'admin' && password === 'admin');

    return of(isLoggedIn).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = val)
    );
  }

  logout() {
    this.isLoggedIn = false;
  }
}
