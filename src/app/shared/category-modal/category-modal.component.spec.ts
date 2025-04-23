import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCategoryComponent } from './category-modal.component';

describe('ModalCategoryComponent', () => {
  let component: ModalCategoryComponent;
  let fixture: ComponentFixture<ModalCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCategoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
