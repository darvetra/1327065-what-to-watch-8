import {MovieType} from '../types/movie';

export const promoMovie : MovieType = {
  id: 21,
  name: 'The Grand Budapest Hotel part.2',
  posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
  // previewImage: string,
  backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
  // backgroundColor: ,
  videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  previewVideoLink: 'img/bg-the-grand-budapest-hotel.jpg',
  description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.\n' +
    'Gustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
  rating: 3.9,
  scoresCount: 240,
  director: 'Wes Anderson',
  starring: [
    'Bill Murray',
    'Edward Norton',
    'Jude Law',
    'Willem Dafoe',
    'Saoirse Ronan',
    'Tony Revoloru',
    'Tilda Swinton',
    'Tom Wilkinson',
    'Owen Wilkinson',
    'Adrien Brody',
    'Ralph Fiennes',
    'Jeff Goldblum',
  ],
  runTime: 19,
  genre: 'Comedy',
  released: 2014,
  // isFavorite: ,
};

