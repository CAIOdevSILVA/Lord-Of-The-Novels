import React from 'react'

import Card from "../Card/index"
import * as Styles from "./style"

const Cards = ({ novels }) => {
  return (
    <Styles.Container>
      {novels.map((novel, index) => (
        <Card novel={novel} key={index}/>
      ))}
    </Styles.Container>
  )
}

export default Cards