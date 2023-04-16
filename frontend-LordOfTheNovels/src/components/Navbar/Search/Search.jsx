import { useState } from "react"

import { RxMagnifyingGlass }  from "react-icons/rx"

import * as Styles from "./style"

const Search = () => {
  const [isActive, setIsActive] = useState(false)
  const hanldeSearchAnimation = () => {
    setIsActive( isActive ? false : true)
  }

  return (
    <div>
      <Styles.Search active={isActive} onClick={hanldeSearchAnimation}>
       <div>
          <RxMagnifyingGlass />
       </div>
       
      </Styles.Search>
    </div>
  )
}

export default Search