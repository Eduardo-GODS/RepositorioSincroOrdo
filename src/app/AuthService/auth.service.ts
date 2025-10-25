import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Isso diz ao Angular como "injetar" este serviço
})
export class AuthService {

  private _isLoggedIn = false; //alterado R

  constructor() { }

  // No futuro, isso vai verificar um token no localStorage, por exemplo.
  // Por enquanto, é uma função simples.
  isLoggedIn(): boolean {
    return this._isLoggedIn;

    // Mude para 'true' para testar o acesso liberado (como se estivesse logado)
    // Mude para 'false' para testar o bloqueio (como se estivesse deslogado)
    // !! return false;!!
  }

  // 👇 MÉTODO NOVO QUE O LOGIN VAI CHAMAR
  login(): void {
    // No futuro, aqui você faria a chamada de API
    this._isLoggedIn = true; // <-- Muda o estado
  }

  logout(): void {
    this._isLoggedIn = false;
  }
}
