import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { map, Observable, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { States } from '../../types/states';

@Injectable({
  providedIn: 'root',
})
export class FederalUnitService {
  private apiUrl: string = environment.apiUrl;
  private cache$?: Observable<States[]>;

  constructor(private httpClient: HttpClient) {}

  listar(): Observable<States[]> {
    if (!this.cache$) {
      this.cache$ = this.requestStates().pipe(
        map((data) =>
          data.map((item) => ({
            id: item.id,
            stateName: item.nome,
            stateCode: item.sigla,
          }))
        ),
        shareReplay(1)
      );
    }
    return this.cache$;
  }

  private requestStates(): Observable<any[]> {
    return this.httpClient.get<States[]>(`${this.apiUrl}/estados`);
  }

  // Opcional: Método para limpar o cache, se necessário
  clearCache(): void {
    this.cache$ = undefined;
  }
}
