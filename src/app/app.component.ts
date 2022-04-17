import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public nav = [{
    name: "INICIO",
    link: "/"
  },
{
  name: "BUSCAR",
  link: "/buscar"
}]

public topGallery = {
  title: "Los 5 más populares hoy",
  gallery: [{
    position: 1,
    image: "/assets/Top10/1-papel.webp",
    name: "La casa de papel",
  },
  {
    position: 2,
    image: "/assets/Top10/2-reina.webp",
    name: "La reina del flow",
  },
  {
    position: 3,
    image: "/assets/Top10/3-titanes.webp",
    name: "Titanes",
  },
  {
    position: 4,
    image: "/assets/Top10/4-lostinspace.webp",
    name: "Lost in space",
  },
  {
    position: 5,
    image: "/assets/Top10/5-dondecaben.webp",
    name: "Donde caben dos",
  }]
}

public comedyGallery = {
  title: "Comedia",
  gallery: [{
    image: "/assets/Comedia/cazafantasmas.webp",
    name: "Cazafantasmas"
  },
  {
    image: "/assets/Comedia/erasehollywood.webp",
    name: "Érase Hollywood"
  },
  {
    image: "/assets/Comedia/laterminal.webp",
    name: "La Terminal"
  },
  {
    image: "/assets/Comedia/regresofuturo.webp",
    name: "Regreso al futuro"
  },
  {
    image: "/assets/Comedia/padresella.webp",
    name: "Padres ella"
  },
  {
    image: "/assets/Comedia/ted2.webp",
    name: "Ted 2"
  }]
}

public terrorGallery = {
  title: "Terror",
  gallery: [{
    image: "/assets/Terror/insidious2.webp",
    name: "Insidious 2"
  },
  {
    image: "/assets/Terror/malasana.webp",
    name: "Malasaña"
  },
  {
    image: "/assets/Terror/multiple.webp",
    name: "Múltiple"
  },
  {
    image: "/assets/Terror/reflejos.webp",
    name: "Reflejos"
  },
  {
    image: "/assets/Terror/infiernoagua.webp",
    name: "Infierno agua"
  },
  {
    image: "/assets/Terror/life.webp",
    name: "Life"
  }]
}

public dramaGallery = {
  title: "Drama",
  gallery: [{
    image: "/assets/Drama/1917.webp",
    name: "1917"
  },
  {
    image: "/assets/Drama/arrival.webp",
    name: "Arrival"
  },
  {
    image: "/assets/Drama/naufrago.webp",
    name: "Náufrago"
  },
  {
    image: "/assets/Drama/scarface.webp",
    name: "Scarface"
  },
  {
    image: "/assets/Drama/schindler.webp",
    name: "Schindler"
  },
  {
    image: "/assets/Drama/sombradiablo.webp",
    name: "Sombra diablo"
  }]
}
}
