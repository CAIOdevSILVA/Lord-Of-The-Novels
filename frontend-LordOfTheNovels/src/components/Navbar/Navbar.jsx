import { useState, useEffect } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoCloseSharp } from "react-icons/io5"

//Components
import { UserMenu, NavLinks, Search, SideBar } from "../index"

import * as Styles from "./style"
import Logo from "../../assets/Logo-Dark__1.png"



const Navbar = () => {
  const [ toggleMenu, settoggleMenu ] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if(window.innerWidth <= 769){
      setIsMobile(true)
    }
  },[isMobile])

  const handdleToggleMenu = () => {
    settoggleMenu(toggleMenu === false ? true : false)
  }

  return (
    <Styles.Container>
      <div className="nav-item">
        <Styles.Logo>
          <img src={Logo} alt="Logo-Lord of the Novels" />
        </Styles.Logo>
        <NavLinks />
      </div>
     <div className="nav-item">
        <Search isMobile={isMobile}/>
        <UserMenu />

        <Styles.ToggleSidebar active={toggleMenu}>
            <span onClick={handdleToggleMenu}>
              <GiHamburgerMenu size={30} className="burguer"/>
            </span>
            <span onClick={handdleToggleMenu}>
              <IoCloseSharp size={30} className="close"/> 
            </span>
        </Styles.ToggleSidebar>
     </div>
     {toggleMenu && <SideBar />}
    </Styles.Container>
  );
};

export default Navbar;
