import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Promotion } from '../../core/types/promotion';

@Component({
  selector: 'app-search-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './search-card.component.html',
  styleUrl: './search-card.component.scss',
})
export class SearchCardComponent {
  @Input() promotion!: Promotion;
}
