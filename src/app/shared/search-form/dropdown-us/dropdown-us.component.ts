import { Component, Input, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FederalUnitService } from '../../../core/service/federal-unit/federal-unit.service';
import { States } from '../../../core/types/states';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-dropdown-us',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownUsComponent),
      multi: true,
    },
  ],
  imports: [
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    AsyncPipe,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './dropdown-us.component.html',
  styleUrl: './dropdown-us.component.scss',
})
export class DropdownUsComponent implements ControlValueAccessor {
  @Input() matPrefix: string = '';
  @Input() matLabel: string = '';
  @Input() matSuffix: string = '';

  options: States[] = [];
  myControl = new FormControl('');
  filteredOptions!: Observable<States[]>;

  private onChange = (value: any) => {};
  private onTouched = () => {};

  constructor(private federalUnitService: FederalUnitService) {}

  ngOnInit(): void {
    this.federalUnitService.listar().subscribe((dados) => {
      this.options = dados || [];
    });

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );

    this.myControl.valueChanges.subscribe((value) => {
      this.onChange(value);
    });
  }

  writeValue(value: any): void {
    this.myControl.setValue(value, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.myControl.disable() : this.myControl.enable();
  }

  private _filter(value: string): States[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) =>
      option.stateName.toLowerCase().includes(filterValue)
    );
  }
}
