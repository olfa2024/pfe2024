import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { RecetteComponent } from './recette/recette.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { PannierComponent } from './pannier/pannier.component';
import { SigninComponent } from './signin/signin.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { ForeignComponent } from './foreign/foreign.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
     {path: '', component:  AccueilComponent ,pathMatch:'full'},
  {path: 'accueil', component:AccueilComponent},
  {path: 'recette', component: RecetteComponent},
  {path: 'calendrier', component: CalendrierComponent},
  {path: 'a-propos', component: AProposComponent},
   {path: 'pannier',component:PannierComponent},
   {path: 'login',component:LoginComponent},
     {path: 'signup',component: SignupComponent},
    {path: 'signin',component:SigninComponent},
     {path: 'nutrition',component:NutritionComponent},
     {path: 'footer',component:FooterComponent},
     {path: 'foreign',component:ForeignComponent},
     {path: 'contact',component: ContactComponent},
     {path: 'menu',component: MenuComponent},
  
  {path: '**' ,  redirectTo :  'accueil'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
