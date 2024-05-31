import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  articles: any[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articleService.getArticles().subscribe({
      next: (data) => {
        this.articles = data;
      },
      error: (error) => {
        console.error('Error al obtener artículos', error);
      },
      complete: () => {
        console.log('Obtención de artículos completada');
      }
    });
  }
}
