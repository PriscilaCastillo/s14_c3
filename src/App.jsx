// import React from 'react'

import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";

export const App = () => {

  let dogs = [
    {
      img: 'https://placedog.net/300/400',
      name: 'Cobu',
      telefono: '55533300',
      pais: 'Perú',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      id: 1,
    },
    {
      img: 'https://placedog.net/300/401',
      name: 'Hachi',
      telefono: '55533300',
      pais: 'Perú',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      id: 2,
    },
    {
      img: 'https://placedog.net/300/402',
      name: 'Manchas',
      telefono: '55533300',
      pais: 'Perú',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      id: 3,
    },
    {
      img: 'https://placedog.net/300/403',
      name: 'Doby',
      telefono: '55533300',
      pais: 'Perú',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      id: 4,
    },
    {
      img: 'https://placedog.net/300/404',
      name: 'Chester',
      telefono: '55533300',
      pais: 'Perú',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      id: 5,
    },
    {
      img: 'https://placedog.net/300/405',
      name: 'Harry',
      telefono: '55533300',
      pais: 'Perú',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      id: 6,
    },
    {
      img: 'https://placedog.net/300/406',
      name: 'Marley',
      telefono: '55533300',
      pais: 'Perú',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      id: 7,
    },
    {
      img: 'https://placedog.net/300/407',
      name: 'Benji',
      telefono: '55533300',
      pais: 'Perú',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      id: 8,
    },
    {
      img: 'https://placedog.net/300/408',
      name: 'Marli',
      telefono: '55533300',
      pais: 'Perú',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      id: 9,
    },
  ];

  return (
    <div>
      <Header />
      <Body dogs={dogs} />
      <Footer />
    </div>
  )
}


