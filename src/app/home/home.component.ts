import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isLoading: boolean = false;
  images: string[] = [
    'assets/step1.png',
    'assets/step2.png',
    'assets/step3.png',
    'assets/step4.png',
    'assets/step5.png',
    'assets/step6.png',
    'assets/step7.png',
    'assets/step8.png'
  ];
  texts: string[] = [
    '...',
    '..',
    '.',
    '..',
    '...',
    '..',
    '.',
    '..'
  ];
  nombre: string = '';
  precio: number = 0;

  constructor(private router: Router, private articleService: ArticleService) {}

  showLoader() {
    this.isLoading = true;
  }

  hideLoader() {
    this.isLoading = false;
  }

  submitForm() {
    this.showLoader();
    const article = { nombre: this.nombre, precio: this.precio };
    setTimeout(()=>{
      this.articleService.saveArticle(article).subscribe({
        next: (response) => {
          console.log('Artículo guardado', response);
        },
        error: (error) => {
          console.error('Error al guardar el artículo', error);
        },
        complete: () => {
          console.log('Obtención de artículos completada');
          this.hideLoader();
          this.router.navigate(['/list']);
        }
      });
    }, 3000)
  }

  showLoaderSimple() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/list']);
    }, 5000);
  }
}
