import React from 'react'

import Hero from '../mini-components/Hero'
import Qualities from '../mini-components/Qualities'
import Members from '../mini-components/Members'

const Home = () => {
  const donors = [
    {
      id: 1,
      image: "/keanu.jpg",
      title: "John Wick",
      amount: "12$"
    },
    {
      id: 2,
      image: "/ironman.jpg",
      title: "Iron man",
      amount: "1$"
    },
    {
      id: 3,
      image: "/novak.jpg",
      title: "Novak Djokovic",
      amount: "10000$"
    },
    {
      id: 4,
      image: "/radiohead.jpg",
      title: "Radiohead",
      amount: "1$"
    },
    {
      id: 5,
      image: "/elon.jpeg",
      title: "Elon Musk",
      amount: "1million$"
    },
  ]
  return (
    <>
     <Hero/>
     <Members donors = {donors}/>
    </>
  )
}

export default Home;