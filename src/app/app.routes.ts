import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { PrincipalComponent } from './Components/principal/principal.component';
import { RegistrarComponent } from './Components/registrar/registrar.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent }, // Ruta para el componente
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Ruta predeterminada
    { path: 'principal', component: PrincipalComponent }, // Ruta para el componente
    { path: 'registrar', component: RegistrarComponent }, // Ruta para el componente
];

