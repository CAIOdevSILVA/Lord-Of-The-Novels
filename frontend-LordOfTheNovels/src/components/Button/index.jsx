import React from 'react'
import * as Styles from "./style"

const Button = ({children}) => {
  return (
    <>
      <Styles.StyledButton>{children}</Styles.StyledButton>
    </>
  )
}

export default Button