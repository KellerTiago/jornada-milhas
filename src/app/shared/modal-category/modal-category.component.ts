import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-modal-category',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './modal-category.component.html',
  styleUrl: './modal-category.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ModalCategoryComponent),
      multi: true
    }
  ]
})
export class ModalCategoryComponent implements ControlValueAccessor {
  @Input() title: string = '';
  @Input() subtitle: string = '';

  value: number = 0;
  onChage = (value: number) => {};
  onTouch = () => {};

  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChage = fn;
  }
  registerOnTouched(fn: any): void {
    this.onChage = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  increase(): void {
    this.value += 1;
    this.onChage(this.value);
    this.onTouch;
  }

  decrease() {
    if (this.value > 0) {
      this.value -= 1;
      this.onChage(this.value);
      this.onTouch;
    }
  }
}
