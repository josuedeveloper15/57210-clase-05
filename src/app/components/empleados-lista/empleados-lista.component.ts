import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-empleados-lista',
  templateUrl: './empleados-lista.component.html',
  styleUrl: './empleados-lista.component.scss',
})
export class EmpleadosListaComponent {
  // Cuando usamos Input, decimos que esta propiedad la recibiremos desde el componente padre
  @Input() data: Empleado[] = [];

  @Output() eliminarEmpleado = new EventEmitter();
}
