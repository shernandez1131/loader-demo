import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {
  @Input() images: string[] = [];
  @Input() texts: string[] = [];
  @Input() interval: number = 2000;  // Tiempo de cambio de imágenes en milisegundos
  @Input() isLoading: boolean = false;

  currentImage: string | undefined;
  currentText: string | undefined;
  private index: number = 0;
  private intervalId: any;

  ngOnInit() {
    this.startLoader();
  }

  ngOnDestroy() {
    this.stopLoader();
  }

  startLoader() {
    if (this.images.length && this.texts.length) {
      this.updateContent();
      this.intervalId = setInterval(() => {
        this.updateContent();
      }, this.interval);
    }
  }

  stopLoader() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  updateContent() {
    this.currentImage = this.images[this.index];
    this.currentText = this.texts[this.index];
    this.index = (this.index + 1) % this.images.length;
  }
}
