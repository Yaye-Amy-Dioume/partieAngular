import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { CommandeComponent } from './commande/commande.component';

import { AppComponent } from './app.component';
import bootstrap from '../main.server';
import { CategorieComponent } from './categorie/categorie.component';


export const routes: Routes = [
    {path:'', component: MainComponent },
    {path: 'commande', component:CommandeComponent},
    {path: 'inscription',component: InscriptionComponent},
    {path: 'login', component: LoginComponent},
    {path:'categorie', component: CategorieComponent},
];



     
    

    


