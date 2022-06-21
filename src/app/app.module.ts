import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { JuegosComponent } from './layout/juegos/juegos.component';
import {ContactoComponent} from './Components/contacto/contacto.component';
import {SomosComponent} from './Components/somos/somos.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    JuegosComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'somos',component: SomosComponent},
      {path: 'contacto',component: ContactoComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
