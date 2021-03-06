import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { JugadorComponent } from './pages/jugador/jugador.component';
import { JugadoresComponent } from './pages/jugadores/jugadores.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { GraphicsComponent } from './pages/graphics/graphics.component';

import { HighchartsChartComponent } from 'highcharts-angular';
import { AgmCoreModule } from '@agm/core';
import { MapsComponent } from './pages/maps/maps.component';
import { MusicComponent } from './pages/music/music.component';
import { ArtistaComponent } from './pages/artista/artista.component';

import { TarjetasComponent } from './pages/tarjetas/tarjetas.component';
import { LoadingComponent } from './shared/loading/loading.component';

import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    JugadorComponent,
    JugadoresComponent,
    ArtistaComponent,
    NavbarComponent,
    SidebarComponent,
    GraphicsComponent,
    HighchartsChartComponent,
    MapsComponent,
    MusicComponent,    
    TarjetasComponent,
    LoadingComponent,
    DomseguroPipe,
    NoimagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    PerfectScrollbarModule,
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyCrlaDjab8t2QLoD3_cZ4x6wgKENrE55Lc',
      libraries: ['places'] 
    })
  ],
  providers: [ {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
