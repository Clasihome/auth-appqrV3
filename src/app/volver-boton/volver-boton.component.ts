import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volver-boton',
  templateUrl: './volver-boton.component.html',
  styleUrls: ['./volver-boton.component.scss'],
  standalone: true, // Marcamos el componente como independiente
})
export class VolverBotonComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['../selector']); // Navega a la ruta anterior
  }

  
}