import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../classes/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://localhost:7052/api/Produto'

  adicionarProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(`${this.apiUrl}/AdicionarProduto`, produto);
  }
  
  listarProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.apiUrl}/ListarProdutos`);
  }

  listarAtivos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.apiUrl}/ListarAtivos`);
  }

  listarInativos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.apiUrl}/ListarInativos`);
  }
}
