import { useState, useRef, createElement, useEffect } from 'react'
import { Link } from "react-router-dom"

//icons
import { HiHome } from "react-icons/hi"
import { TbBrandSafari } from "react-icons/tb"
import { MdEmail } from "react-icons/md"

import * as Styles from "./style"

const Links = [
  {
    name: "Home",
    link: "/",
    icon: HiHome
  },
  {
    name: "Browse",
    link: "/browse/Ação",
    icon: TbBrandSafari
  },
  {
    name: "Contato",
    link: "/contact",
    icon: MdEmail
  }
];

const NavLinks = () => {
  const listRef = useRef(null)
  const [isLinkMarked, setIsLinkMarked] = useState("Home")

  const handleClick = (event) => {
    setIsLinkMarked(event.target.innerText)
  }

  useEffect(() => {
    listRef.current?.offsetHeight;
  }, [isLinkMarked])

  return (
    <div>
      <Styles.ListContainer ref={listRef} >
        {Links.map((link) => (
          <Link key={link.name} to={link.link} className='link'>
            <Styles.ListItem key={link.name} onClick={handleClick} active={ link.name === isLinkMarked  ? true : false}>
            {createElement(link.icon)} {link.name}
            </Styles.ListItem>
          </Link>
        ))}
      </Styles.ListContainer>
    </div>
  )
}

export default NavLinks