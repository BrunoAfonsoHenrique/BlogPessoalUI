import { UserLogin } from './../model/UserLogin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    //return this.http.post<UserLogin>('https://blogpessoal-ui.herokuapp.com/usuarios/logar', userLogin)
      return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar',userLogin)

  }

  cadastrar(user: User): Observable<User>{
    //return this.http.post<User>('https://blogpessoal-ui.herokuapp.com/usuarios/cadastrar', user)
    return this.http.post<User>('http://localhost:8080/usuarios/cadastrar',user)
  }

  logado(){
    let ok = false

    if (environment.token != ''){
      ok = true
    }
    
    return ok
  }
}

