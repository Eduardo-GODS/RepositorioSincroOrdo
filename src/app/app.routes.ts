import { Routes } from '@angular/router';
// Importe seu guard (o caminho pode variar se você o moveu)
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
    // Rotas públicas (fora do dashboard)
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component')
                             .then(m => m.LoginComponent)
    },
    {
        path: 'register',
        loadComponent: () => import('./pages/register/register.component')
                             .then(m => m.RegisterComponent)
    },

    // Rota "Pai" (Seu Layout de Dashboard)
    // Qualquer rota protegida passará por aqui
    {
        path: '', // O caminho base
        loadComponent: () => import('./dashboard/dashboard') // Carrega seu DashboardComponent
                             .then(m => m.DashboardComponent),
        canActivate: [authGuard], // Protege esta rota e todas as suas filhas

        // Rotas "Filhas" (o que será exibido DENTRO do Dashboard)
        children: [
            {
                path: 'home', // O caminho será /home
                loadComponent: () => import('./pages/home/home.component')
                                     .then(m => m.HomeComponent)
            },

            // Exemplo: Se você criar uma página de perfil
            // {
            //     path: 'perfil',
            //     loadComponent: () => import('./pages/perfil/perfil.component')
            //                          .then(m => m.PerfilComponent)
            // },

            // Redireciona o caminho '' (raiz logada) para '/home'
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ]
    },

    // --- Redirecionamentos Finais ---
    // Se o usuário digitar qualquer rota não existente, volta para o login
    {
        path: '**',
        redirectTo: 'login'
    }
];
