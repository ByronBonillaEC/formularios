import { Routes } from '@angular/router';
import { FormularioNormal } from './formulario-normal/formulario-normal';
//import { FormularioReactivo } from './formulario-reactivo/formulario-reactivo';

export const routes: Routes = [
    {
        path : "",
        title : "Formulario Normal",
        component : FormularioNormal
    },
    {
        path : "reactivo",
        title : "Formulario Reactivo",        
        loadComponent() {
            return import('./formulario-reactivo/formulario-reactivo')
            .then(m => m.FormularioReactivo)
        },
    }
];
