import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent {
  texto: string = 'El campo no debe estar vacío';
  color: string = 'red';
  valido: boolean = true;

  miFormulario: FormGroup = new FormGroup({
    nombre: new FormControl('', Validators.required),
  });

  tieneError(campo: string) {
    return this.miFormulario.get(campo)?.invalid || false;
    // return this.miFormulario.get()?.invalid;
  }

  cambiarNombre() {
    this.texto = Math.random().toString();
  }
}
