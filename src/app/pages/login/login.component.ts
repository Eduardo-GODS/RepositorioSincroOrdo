// Salve como: src/app/pages/login/login.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

// 👇 1. IMPORTE O AUTHSERVICE
// O caminho sobe 2 níveis (de 'pages/login' para 'app') e entra em 'AuthService'
import { AuthService } from '../../AuthService/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

   // Injete o FormBuilder para criar o formulário e o Router para navegar
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  // ngOnInit é chamado quando o componente é inicializado
  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      console.error('Formulário de login inválido.');
      return;
    }

    console.log('Tentativa de login com:', this.loginForm.value);

    // Se estivevr logado, AuthService virar 'true'
    this.authService.login();

    // Mostrar o alerta
    alert('Login simulado com sucesso! Redirecionando para Home...');

    // AuthGuard vai checa 'isLoggedIn()' e vai receber 'true'
    this.router.navigate(['/home']);
  }
}
