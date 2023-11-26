import { Component } from '@angular/core';

@Component({
  selector: 'app-estacionamiento',
  templateUrl: './estacionamiento.component.html',
  styleUrls: ['./estacionamiento.component.css']
})
export class EstacionamientoComponent {
  horas: number = 0;
  minutos: number = 0;
  costo: number = 0;

  calcularCosto(): void {
    // Calcular el costo
    // El costo es de $1500 por hora o fracción
    this.costo = 1500 * (this.horas + this.minutos / 60);
  }
}
