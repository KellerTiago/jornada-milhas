import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownUsComponent } from './dropdown-us.component';

describe('DropdownUsComponent', () => {
  let component: DropdownUsComponent;
  let fixture: ComponentFixture<DropdownUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownUsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
