import { Component } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario-reactivo',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-reactivo.html',
  styleUrl: './formulario-reactivo.css'
})
export class FormularioReactivo {

  profileForm = new FormGroup({  
    correo: new FormControl('', [Validators.required, Validators.email]),
  });
  
  correos : string[] = [];
  enviar() :  void {
    if (this.profileForm.value.correo != ''){ 
      if (this.profileForm.value.correo){
        this.correos.push(this.profileForm.value.correo);
        this.profileForm.value.correo = '';
        console.log(this.correos);
      }
    }
  }
}
