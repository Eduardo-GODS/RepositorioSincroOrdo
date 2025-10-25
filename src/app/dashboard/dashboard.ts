// Importe o Router
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['/dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router) {}

  navegarParaDashboard() {
    console.log('Navegando para /dashboard');
    this.router.navigate(['/dashboard']);
  }
}
