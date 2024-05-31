import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = 'http://localhost:8001/orchestrator/process';

  constructor(private http: HttpClient) {}

  saveArticle(article: any): Observable<any> {
    return this.http.post(this.apiUrl, article);
  }

  getArticles(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
