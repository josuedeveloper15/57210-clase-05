import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrl: './my-card.component.scss',
})
export class MyCardComponent {
  // Cuando colocamos el "!", es el operador de acercion
  @Input({ required: true }) empleado!: Empleado;

  @Output() verDetalle = new EventEmitter();
}
