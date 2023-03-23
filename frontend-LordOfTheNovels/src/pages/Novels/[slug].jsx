import React from 'react'

import { Link } from "react-router-dom"
import Button from "../../components/Button/index"

import * as Styles from "./style"
import image from "../../assets/Lord-of-the-Mysteries.jpg"
import { BsFillStarFill } from "react-icons/bs"

const Novels = () => {
  return (
    <Styles.Container>
      <Styles.NovelInfo>
        <Styles.NovelImage>
          <img src={image} alt="" />
        </Styles.NovelImage>
        
        <Styles.NovelData>
          <h1>Lord of the Mysteries</h1>
          <span><strong>Autor:</strong> Cattlefish</span>
          <Styles.Rating>
            <span>Seguidores:<strong> 124585</strong></span>
            <span><strong><BsFillStarFill/>4.9</strong>(125454 Votaram)</span>
          </Styles.Rating>
          <Styles.About>
            <p>
              In the waves of steam and machinery, who would achieve extraordinary?
              In the shadows of history and darkness, who was whispering in my ears? 
              I woke up from the realm of mysteries and opened my eyes to look at the world 
              : Firearms, artilleries, battleships, airships, difference machines; potions, 
              divination, curses, hang-men and sealed...
            </p>
          </Styles.About>
          <Styles.Tags>
            <span>Ação</span>
            <span>Aventura</span>
            <span>Mistério</span>
          </Styles.Tags>

          <Styles.CallToAction>
            <Link to={"/novels/:slug/:slug"} style={{textDecoration:"none"}}>
              <Button>Leia Agora</Button>
            </Link>
            <Button>Seguir</Button>
          </Styles.CallToAction>
        </Styles.NovelData>
      </Styles.NovelInfo>
      
      <Styles.Chapters></Styles.Chapters>
      <Styles.Reviews></Styles.Reviews>
      <Styles.Indications></Styles.Indications>
    </Styles.Container>
  )
}

export default Novels