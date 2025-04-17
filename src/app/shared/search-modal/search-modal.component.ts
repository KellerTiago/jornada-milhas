import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { SearchFormService } from '../../core/service/search-form/search-form.service';
import { ModalCategoryComponent } from '../modal-category/modal-category.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-modal',
  standalone: true,
  imports: [
    MatDialogModule,
    MatIconModule,
    MatChipsModule,
    ModalCategoryComponent,
    ReactiveFormsModule
  ],
  templateUrl: './search-modal.component.html',
  styleUrl: './search-modal.component.scss',
})
export class SearchModalComponent {
  constructor(public searchFormService: SearchFormService) {}

  search (){
    console.log(this.searchFormService.formSearch.value)
  }
}
