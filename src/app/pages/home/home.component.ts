import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';
import { ContainerComponent } from '../../shared/container/container.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { SearchCardComponent } from '../../shared/search-card/search-card.component';
import { TestimonialCardComponent } from '../../shared/testimonial-card/testimonial-card.component';
import { SearchFormComponent } from '../../shared/search-form/search-form.component';
import { PromotionService } from '../../core/service/promotion/promotion.service';
import { HttpClientModule } from '@angular/common/http';
import { Promotion } from '../../core/types/promotion';
import { TestimonialCardService } from '../../core/service/testimonial-card/testimonial-card.service';
import { Testimonial } from '../../core/types/testimonial';
import { response } from 'express';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    ContainerComponent,
    FooterComponent,
    SearchCardComponent,
    TestimonialCardComponent,
    HttpClientModule,
    SearchFormComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  [x: string]: any;
  promotion: Promotion[] = [];
  testimonial: Testimonial[] = [];

  constructor(
    private promotionService: PromotionService,
    private testimonialService: TestimonialCardService
  ) {}

  ngOnInit(): void {
    this.promotionService.listar().subscribe({
      next: (response) => {
        console.log('Dados recebidos da API:', response);
        this.promotion = response;
      },
      error: (err) => {
        console.error('Erro na requisição:', err);
      },
    });
    this.testimonialService.listar().subscribe({
      next: (response) => {
        console.log('Dados recebidos da API:', response);
        this.testimonial = response;
      },
      error: (err) => {
        console.error('Erro na requisição:', err);
      },
    });
  }
}
