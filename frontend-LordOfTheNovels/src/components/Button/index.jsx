import React from 'react'
import * as Styles from "./style"

const Button = ({children, outline}) => {
  return (
    <>
      <Styles.StyledButton outline={outline}>{children}</Styles.StyledButton>
    </>
  )
}

export default Button