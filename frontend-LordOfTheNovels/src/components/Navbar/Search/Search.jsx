import { useState } from "react"
import { Link } from "react-router-dom"

import { RxMagnifyingGlass }  from "react-icons/rx"

import * as Styles from "./style"

const Search = ({ isMobile }) => {
  const [isActive, setIsActive] = useState(false)

  const hanldeSearchAnimation = () => {
    setIsActive( isActive ? false : true)
  }

  return (
    <div>
      {isMobile === false ? (
        <Styles.Search className={`${isActive ? "active" : ""}`} active={isActive}>
          <div className="iconContainer" onClick={hanldeSearchAnimation}>
            <RxMagnifyingGlass />
          </div>
          <Styles.InputContainer className={`${isActive ? "active" : ""}`}>
            <input type="text" placeholder="Pesquisar..."/>
            <button>
              <Link to={"/search"} className="link" >Buscar</Link>
            </button>
          </Styles.InputContainer>
       </Styles.Search>
      ) : (
        <div>
          <Styles.SearchMobile active={isActive}>
             <div onClick={hanldeSearchAnimation}>
                <RxMagnifyingGlass />
             </div>

             <div className="mobileInput active">
                <input type="text" placeholder="Pesquisar..."/>
                <button>
                  <Link to={"/search"} className="link">Buscar</Link>
                </button>
             </div>
          </Styles.SearchMobile>
        </div>
      )}
    </div>
  )
}

export default Search