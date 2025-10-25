// Arquivo: src/app/pages/register/register.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { RouterModule, Router } from '@angular/router'; // Importa Router aqui

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  // Injete o Router aqui
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      passwordGroup: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
      }, { validators: RegisterComponent.passwordsMatchValidator }),
      agreeTerms: [false, Validators.requiredTrue]
    });
  }

  static passwordsMatchValidator(group: AbstractControl): ValidationErrors | null {
    const pass = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return pass && confirm && pass !== confirm ? { passwordsMismatch: true } : null;
  }

  get firstName() { return this.registerForm.get('firstName'); }
  get lastName() { return this.registerForm.get('lastName'); }
  get username() { return this.registerForm.get('username'); }
  get email() { return this.registerForm.get('email'); }
  get passwordGroup() { return this.registerForm.get('passwordGroup'); }
  get password() { return this.passwordGroup?.get('password'); }
  get confirmPassword() { return this.passwordGroup?.get('confirmPassword'); }
  get agreeTerms() { return this.registerForm.get('agreeTerms'); }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      console.log('Formulário de registro inválido.');
      return;
    }


    // Simula o envio para o backend / serviço
    console.log('Registro enviado:', this.registerForm.value);

    // Navega para a página de login após o "sucesso"
    alert('Registro simulado com sucesso! Redirecionando para Login...'); // Opcional
    this.router.navigate(['/login']); // Navega para a rota '/login'
  }
}
