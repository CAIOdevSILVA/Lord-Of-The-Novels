import React from 'react'
import { Link } from "react-router-dom"

import Cards from "../../components/Cards/index.jsx"

import image from "../../assets/Banner.png"
import { Slider, Slide } from "../../utils/Slider/index"

import { Category } from '../../data/data'
import { NovelsData as novels } from "../../data/data"



import * as Styles from "./style"


const Home = () => {
  const settings = {
    spaceBetween: 20,
    slidesPerView: 1,
    pagination:{
      clickable: true
    },
    loop: true,
    autoplay:{
      delay:1000
    },
    speed: 10000
  }

  return (
    <Styles.Container>

      <Styles.Slider>
        <Slider settings={settings}>
          <Slide>
            <Styles.ImageSlide>
              <Link to={"/novels/Lord-of-the-Mysteries"} style={{textDecoration:"none"}}>
                <img src={image} alt="" />
              </Link>
            </Styles.ImageSlide>
          </Slide>
          <Slide>
            <Styles.ImageSlide>
              <Link to={"/novels"} style={{textDecoration:"none"}}>
                <img src={image} alt="" />
              </Link>
            </Styles.ImageSlide>
          </Slide>
          <Slide>
            <Styles.ImageSlide>
              <Link to={"/novels"} style={{textDecoration:"none"}}>
                <img src={image} alt="" />
              </Link>
            </Styles.ImageSlide>
          </Slide>
          
        </Slider>
      </Styles.Slider>

      <Styles.Releases>
        <Styles.Title>Últimos Lançamentos</Styles.Title>
        <Cards novels={novels}/>
      </Styles.Releases>

      <Styles.Indications>
        <Styles.Title>O Lorde Indica!</Styles.Title>
        <Cards novels={novels}/>
      </Styles.Indications>
      
      <Styles.Tags>
        <Styles.Title>Genêros Populares</Styles.Title>
        <div>
          {Category.map((tags, index) => (
            <Link to={`/${tags.name}`}style={{textDecoration:"none"}}>
              <Styles.Tag key={index}>{tags.name}</Styles.Tag>
            </Link>
          ))}
        </div>
      </Styles.Tags>
    </Styles.Container>
  )
}

export default Home