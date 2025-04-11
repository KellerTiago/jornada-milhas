import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Testimonial } from '../../types/testimonial';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TestimonialCardService {
  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  listar(): Observable<Testimonial[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}/depoimentos`).pipe(
      map((data) => {
        return data.map((item) => ({
          id: item.id,
          text: item.texto,
          autor: item.autor,
          avatar: item.avatar,
        }));
      })
    );
  }
}