import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Testimonial } from '../../core/types/testimonial';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './testimonial-card.component.html',
  styleUrl: './testimonial-card.component.scss',
})
export class TestimonialCardComponent {
  @Input() testimonial!: Testimonial;
}
