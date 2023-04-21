import React from 'react';
import Header from '../components/MapView/Header';
import { SideBarMenu } from '../components/SideBar/SideBarMenu';
import  MyMap  from '../components/MapView/Map';
import './App.css';
import { SideBarMenuItem, SideMenuCard } from '../types/types';
import {FcAdvertising, FcPlus, FcSearch,FcSettings, FcHome,FcDownLeft} from 'react-icons/fc'


function App() {
  
  const items:SideBarMenuItem[] = [
    {
      id: "1",
      label: 'Home',
      icon: FcHome,
      url : "/"
    },


    {
      id: "2",
      label: 'Añadir',
      icon: FcPlus,
      url : "/"
    },

        {
      id: "3",
      label: 'Avanzada',
      icon: FcSearch,
      url : "/"
    },

        {
      id: "4",
      label: 'Ajustes',
      icon: FcSettings,
      url : "/"
    },

        {
      id: "5",
      label: 'Salir',
      icon: FcDownLeft,
      url : "/"
    },
    {
      id: "6",
      label: 'Create',
      icon: FcAdvertising,
      url : '/stores' //TODO: Change this or make it functional
    }
  ];

  const card:SideMenuCard = {
    id : "card01",
    displayName : "Usuario Juan",
    title : "Usuario",
    photoURL: "https://media.tycsports.com/files/2022/06/14/440403/las-20-mejores-fotos-de-perfil-para-tu-cuenta-de-free-fire_w416.webp",
    url : "/"
  }


  return (
    <div className='Container'>

     <MyMap />
     <Header />


      <SideBarMenu items={items}  card={card} />
    </div>

  );
}

export default App;
