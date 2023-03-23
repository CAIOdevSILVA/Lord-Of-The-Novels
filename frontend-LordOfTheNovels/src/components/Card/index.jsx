import React from 'react'

import * as Styles from "./style"

import { Link } from "react-router-dom"
import { BsFillStarFill } from "react-icons/bs"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

const Card = ({novel}) => {
  return (
    <Styles.Container>
      <Link to={"/"} style={{textDecoration:"none"}}>
        <Styles.Imagem>
          <img src={novel.Imagem} />
        </Styles.Imagem>
        <Styles.NovelContent>
          <Styles.Tags>
            <span>{novel.tags[0]}</span>
            <span>{novel.tags[1]}</span>
            <span>{novel.tags[2]}</span>
          </Styles.Tags>
          <Styles.Title>{novel.title}</Styles.Title>
        
          <Styles.NovelInfo>
            <Styles.Rating><BsFillStarFill/>{novel.Rating}</Styles.Rating>
            <Link style={{textDecoration:"none"}}>
              <Styles.NextChapter>
                  <span>
                    <strong>Cap:</strong> {novel.Chapter}
                  </span> 
                  <HiOutlineArrowNarrowRight/>
              </Styles.NextChapter>
            </Link>
          </Styles.NovelInfo>
        </Styles.NovelContent>
      </Link>
    
    </Styles.Container>
  )
}

export default Card