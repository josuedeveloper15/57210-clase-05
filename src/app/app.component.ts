import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Empleado } from './models/empleado';
import { EmpleadosListaComponent } from './components/empleados-lista/empleados-lista.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  modalVisible = false;

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

  @ViewChild(EmpleadosListaComponent)
  empleadosListaComponent?: EmpleadosListaComponent;

  @ViewChild('myDiv') myDiv?: ElementRef<HTMLDivElement>;

  constructor() {}

  ngAfterViewInit(): void {
    console.log(this.empleadosListaComponent?.data);
    console.log(this.myDiv);
  }

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

  verDetalle(ev: Empleado) {
    alert(`Accediendo al detalle de ${ev.nombre} ${ev.apellido}`);
  }
}
