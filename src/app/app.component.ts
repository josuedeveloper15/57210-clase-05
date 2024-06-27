import { Component } from '@angular/core';
import { Empleado } from './models/empleado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'clase-05-comunicacion-componentes';
  empleadosPresentes: Empleado[] = [
    {
      id: 1,
      nombre: 'Jorgelina',
      apellido: 'Perez',
    },
    {
      id: 2,
      nombre: 'Marcos',
      apellido: 'Gonzales',
    },
    {
      id: 3,
      nombre: 'Cynthia',
      apellido: 'Diaz',
    },
  ];
  empleadosAusentes: Empleado[] = [
    {
      id: 10,
      nombre: 'Cristina',
      apellido: 'Perez',
    },
    {
      id: 20,
      nombre: 'Ezequiel',
      apellido: 'Lopez',
    },
  ];

  eliminarEmpleado(idAEliminar: number, from: string) {
    if (from === 'empleadosPresentes') {
      this.empleadosPresentes = this.empleadosPresentes.filter(
        (empleado) => empleado.id != idAEliminar
      );
    }

    if (from === 'empleadosAusentes') {
      this.empleadosAusentes = this.empleadosAusentes.filter(
        (empleado) => empleado.id != idAEliminar
      );
    }

    console.log('RECIBIMOS EL EVENTO eliminarEmpleado EN AppComponent');
  }
}
