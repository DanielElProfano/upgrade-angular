import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { BodyComponent } from './component/body/body.component';
import { GalleryComponent } from './component/body/gallery/gallery.component';
import { FormComponent } from './component/body/gallery/form/form.component';
import { GalleryService } from './services/gallery.service';
import { DeleteComponent } from './component/body/gallery/delete/delete.component';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    GalleryComponent,
    FormComponent,
    DeleteComponent
  ],
 

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function playerFactory() {
  return player;
}