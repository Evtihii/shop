import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'shop';
  @ViewChild('appTitle', { read: ElementRef }) pageTitle!: ElementRef<HTMLHeadingElement>;

constructor(private renderer: Renderer2){}

  ngAfterViewInit() {
    this.renderer.setProperty(this.pageTitle.nativeElement, 'innerText', 'Shop');
  }
}
