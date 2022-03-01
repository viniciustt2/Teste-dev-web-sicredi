import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router
  ) {}

  checkBasicUser(user: IUser):boolean {
    if (user.userName === 'admin' && user.password === '123456') {
      localStorage.setItem('loggedUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  login(user: IUser):Observable<any> {
    return new Observable((observable) => {
      if (this.checkBasicUser(user)) {
        observable.next({ message: 'Logado com sucesso!' });
        this.router.navigate(['/dragons']);
        return observable.complete();
      }

      observable.error({ message: 'Nome de usuário e/ou Senha incorretos!' });
      observable.next();
      observable.complete();
    });
  }

  isUserLogged(): boolean {
    if (!localStorage.getItem('loggedUser')) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return  true;
  }
}
