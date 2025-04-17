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
      adult: new FormControl(3),
      children: new FormControl(0),
      baby: new FormControl(0),
    });
  }

  changeType(event: MatChipSelectionChange, type: string) {
    if (event.selected) {
      this.formSearch.patchValue({ type });
    }
    console.log('Tipo alterado para: ', type);
  }

  changControl(name:string): FormControl {
    const control = this.formSearch.get(name);
    if (!control) {
      throw new Error(`FormControl com nome "${name}" não existe.`);
    }
    return control as FormControl;
  }


  getDescripionPassenger(): string {
    let description = '';
    const adult = this.formSearch.get('adult')?.value;
    if (adult && adult > 0) {
      description += `${adult} adultos${adult > 1 ? 's' : ''}`;
    }
    const children = this.formSearch.get('children')?.value;
    if (children && children > 0) {
      description += `${children} crianças${children > 1 ? 's' : ''}`;
    }
    const infants = this.formSearch.get('infants')?.value;
    if (infants && infants > 0) {
      description += `${infants} bebês${infants > 1 ? 's' : ''}`;
    }
    return description;
  }

  openDialog() {
    this.dialog.open(SearchModalComponent, {
      width: '50%',
    });
  }
}
