import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { CommandeComponent } from './commande/commande.component';
import { CategorieComponent } from './categorie/categorie.component';
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DashboardComponent} from "./dashboard/dashboard.component";


export const routes: Routes = [
    { path: '', redirectTo: 'signin', pathMatch: 'full' },
    { path: '**', redirectTo: 'signin' },
    {path: 'order', component: CommandeComponent},
    {path: 'signup',component: InscriptionComponent},
    {path: 'signin', component: LoginComponent},
    {path:'category', component: CategorieComponent},
    {path:'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [
    MainComponent,
    CommandeComponent,
    InscriptionComponent,
    LoginComponent,
    CategorieComponent,
    DashboardComponent
  ]
})

export class AppRoutingModule {

}



