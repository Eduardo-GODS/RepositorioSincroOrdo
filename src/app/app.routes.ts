// Arquivo: src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
    // Rota de Registro existente:
    {
        path: 'register',
        loadComponent: () => import('./pages/register/register.component')
                             .then(m => m.RegisterComponent)
    },

    // ALTERE AQUI: Redireciona a página inicial (/) para /register
    { path: '', redirectTo: '/register', pathMatch: 'full' }, // MUDOU AQUI

    // ALTERE AQUI: Redireciona qualquer outra rota não encontrada para /register
    { path: '**', redirectTo: '/register' } // MUDOU AQUI
];
