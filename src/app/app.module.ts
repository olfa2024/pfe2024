import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RecetteComponent } from './recette/recette.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { ContactComponent } from './contact/contact.component';
import { MatIconModule } from '@angular/material/icon';
import { PannierComponent } from './pannier/pannier.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { SigninComponent } from './signin/signin.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { MenusRamadanComponent } from './menus-ramadan/menus-ramadan.component';
import { AstucesNutritionRamadanComponent } from './astuces-nutrition-ramadan/astuces-nutrition-ramadan.component';
import { CommunautaireComponent } from './communautaire/communautaire.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForeignComponent } from './foreign/foreign.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AccueilComponent,
    RecetteComponent,
    CalendrierComponent,
    ContactComponent,
    PannierComponent,
    AProposComponent,
    SigninComponent,
    NutritionComponent,
    MenusRamadanComponent,
    AstucesNutritionRamadanComponent,
    CommunautaireComponent,
    LoginComponent,
    SignupComponent,
    ForeignComponent,
    MenuComponent,
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
     ReactiveFormsModule ,
     MatInputModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
