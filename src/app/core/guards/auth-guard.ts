import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../AuthService/auth.service'; // Corrigido para o caminho real do serviço

// Esta é a sintaxe moderna de um Guarda Funcional
export const authGuard: CanActivateFn = (route, state) => {

  // Usamos 'inject()' para pegar os serviços (ao invés do construtor)
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true; // Usuário está logado, então permite o acesso à rota
  } else {
    // Retorna UrlTree em vez de chamar router.navigate diretamente
    return router.parseUrl('/login');
  }
};
