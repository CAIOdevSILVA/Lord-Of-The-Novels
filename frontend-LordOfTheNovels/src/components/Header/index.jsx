import React, { useState } from 'react'

import Button from '../Button'
import { Link } from "react-router-dom"

import Switch from "react-switch"

import { BsFillMoonFill } from "react-icons/bs"
import { FaSun } from "react-icons/fa"
import { FaSafari } from "react-icons/fa"
import { BiLibrary } from "react-icons/bi"
import { MdEmail } from "react-icons/md"
import { SlMagnifier } from "react-icons/sl"

import image from "../../assets/Lord_Of_The_Novels_Logo.png"
import image2 from "../../assets/Logo-Dark__1.png"
import * as Styles from "./style"

const Header = () => {
  const [theme, setTheme] = useState(false)

  return (
    <Styles.Container>
      <Styles.Image>
       {!theme ? (
        <Link to={"/"}>
          <img src={image} alt="Logo LordOfTheNovels"/>
        </Link>
       ) : (
        <Link to={"/"}>
          <img src={image2} alt="Logo LordOfTheNovels"/>
        </Link>
       )}
      </Styles.Image>

      <Styles.List>
        <Link to={"/browse"} className="StyledLink">
          <li><FaSafari /> Browse</li>
        </Link>
        <Link to={"/biblioteca"} className="StyledLink">
          <li><BiLibrary /> Minha Biblioteca</li>
        </Link>
        <Link to={"/contact"} className="StyledLink">
          <li><MdEmail /> Contato</li>
        </Link>
      </Styles.List>

      <Styles.Search>
        <SlMagnifier />
        <input type="text" placeholder='Pesquisar...'/>
      </Styles.Search>

      <Link to={"/login"}>
        <Button>Login</Button>
      </Link>

      <Switch
        onChange={() => {}}
        checked={false}
        checkedIcon={false}
        uncheckedIcon={false}
        height={25}
        handleDiameter={30}
        offColor={"#222222"}
        onColor={"#222222"}
        onHandleColor={"#3e1e68"}
        offHandleColor={"#3e1e68"}
        checkedHandleIcon={<BsFillMoonFill style={{color:"#fff", position:"absolute", top:"6px", left:"8px"}}/>}
        uncheckedHandleIcon={<FaSun style={{color:"#fff", position:"absolute", top:"7px", left:"7px"}}/>}
        boxShadow={' 7px 5px 15px -1px rgba(0,0,0,0.5)'}
        className="switch"
      />
    </Styles.Container>
  )
}

export default Header