import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-normal',
  imports: [FormsModule],
  templateUrl: './formulario-normal.html',
  styleUrl: './formulario-normal.css'
})
export class FormularioNormal {

  nombre : string = '';
  nombres : string[] = [];

  enviar() :  void {
    if (this.nombre != ''){
      this.nombres.push(this.nombre.trim());
      this.nombre = '';
      console.log(this.nombres);
    }
  }

}
