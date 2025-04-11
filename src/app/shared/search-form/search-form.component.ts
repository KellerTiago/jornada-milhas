import { Component, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SearchFormService } from '../../core/service/search-form/search-form.service';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownUsComponent } from './dropdown-us/dropdown-us.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [
    CardComponent,
    MatButtonToggleModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    DropdownUsComponent,
    MatButtonModule,
  ],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
})
export class SearchFormComponent {
  constructor(public searchFormService: SearchFormService) {}
}
