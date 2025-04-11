import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchModalComponent } from '../../../shared/search-modal/search-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MatChipSelectionChange } from '@angular/material/chips';

@Injectable({
  providedIn: 'root',
})
export class SearchFormService {
  formSearch: FormGroup;

  constructor(private dialog: MatDialog) {
    this.formSearch = new FormGroup({
      oneWay: new FormControl(false),
      origin: new FormControl(null),
      destination: new FormControl(null),
      type: new FormControl('Econômica'),
    });
  }

  changeType(event: MatChipSelectionChange, type: string) {
    if (event.selected) {
      this.formSearch.patchValue({ type });
    }
    console.log('Tipo alterado para: ', type);
  }

  openDialog() {
    this.dialog.open(SearchModalComponent, {
      width: '50%',
    });
  }
}
