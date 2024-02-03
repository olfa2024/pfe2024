// menu.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  public iftarMenu = [
    'Dattes et eau',
    'Soupe (Harira ou Chorba)',
    'Entrées (Samosas, Salade de lentilles, Falafels, Taboulé)',
    'Plats principaux (Poulet rôti, Poisson au four, Tajine d\'agneau, Riz aux fruits secs)',
    'Accompagnements (Pain plat, Houmous, Baba ganoush, Chutney de mangue)',
    'Desserts (Baklava, Qatayef, Dates farcies, Sorbet à la menthe)',
    'Boissons (Jus de fruits frais, Smoothies, Tisane à la menthe, Eau fraîche)'
  ];

  public sohourMenu = [
    'Céréales et grains entiers (Avoine avec fruits secs, Boulgour avec amandes et raisins secs)',
    'Protéines (Omelette aux légumes, Yaourt grec avec noix et miel)'
  ];
}
