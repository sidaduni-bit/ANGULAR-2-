import { Component, OnInit } from '@angular/core';
import { SecondaryCharacterCard } from '../../components/secondary-character-card/secondary-character-card';
import { CombatStyleModel } from '../../interfaces/combat-style-mode';

@Component({
  selector: 'app-combat-styles',
  imports: [SecondaryCharacterCard],
  templateUrl: './combat-styles.html',
  styleUrl: './combat-styles.css',
})
export class CombatStyles implements OnInit {

  combatStyles: CombatStyleModel[] = [];

  async ngOnInit() {

    const response = await fetch(
      'https://www.demonslayer-api.com/api/v1/combat-styles?limit=39'
    );

    const data = await response.json();

    this.combatStyles = data.content;

  }

}