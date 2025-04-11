import { Component, Input } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FederalUnitService } from '../../../core/service/federal-unit/federal-unit.service';
import { States } from '../../../core/types/states';
import { FormControl,FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-dropdown-us',
  standalone: true,
  imports: [
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    AsyncPipe,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './dropdown-us.component.html',
  styleUrl: './dropdown-us.component.scss',
})
export class DropdownUsComponent {
  @Input() matPrefix: string = '';
  @Input() matLabel: string = '';
  @Input() matSuffix: string = '';

  options: States[] = [];
  myControl = new FormControl('');
  filteredOptions!: Observable<States[]>;

  constructor(private federalUnitService: FederalUnitService) {}

  ngOnInit(): void {
    this.federalUnitService.listar().subscribe((dados) => {
      this.options = dados || [];
    });

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );
  }

  private _filter(value: string): States[] {
    const filterValue = value.toLowerCase();
    const result = this.options.filter(option =>
      option.stateName.toLowerCase().includes(filterValue)
    );
    return result
  }
}