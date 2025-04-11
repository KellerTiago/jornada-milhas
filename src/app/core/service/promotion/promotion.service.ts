import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { Promotion } from '../../types/promotion';

@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  listar(): Observable<Promotion[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}/promocoes`).pipe(
      map((data) =>
        data.map((item) => ({
          id: item.id,
          image: item.imagem,
          destination: item.destino,
          price: item.preco,
        }))
      )
    );
  }
}
