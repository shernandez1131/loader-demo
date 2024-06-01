import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private baseUrl = 'http://localhost:8080/orchestrator';

  constructor(private http: HttpClient) {}

  saveArticle(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.baseUrl + '/process', data, { headers });
  }

  getArticles(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + '/entities');
  }
}
