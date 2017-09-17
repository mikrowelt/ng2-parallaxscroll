
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'prismjs';
import { ParallaxScrollModule } from 'ng2-parallaxscroll';
import { CodeHighlighterModule } from 'primeng/primeng';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ParallaxScrollModule,
    CodeHighlighterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
