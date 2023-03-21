import React from "react";

import { useSelector } from "react-redux"
import Switcher from "../Switcher";
import Button from "../Button";
import { Link } from "react-router-dom";


import { FaSafari } from "react-icons/fa";
import { BiLibrary } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { SlMagnifier } from "react-icons/sl";

import image from "../../assets/Lord_Of_The_Novels_Logo.png";
import image2 from "../../assets/Logo-Dark__1.png";
import * as Styles from "./style";

const Header = () => {
  const  { theme }  = useSelector((rootReducer) => rootReducer.theme)

  return (
    <Styles.Container>
      <Styles.Image>
        {theme === "light"? (
          <Link to={"/"}>
            <img src={image} alt="Logo LordOfTheNovels" />
          </Link>
        ) : (
          <Link to={"/"}>
            <img src={image2} alt="Logo LordOfTheNovels" />
          </Link>
        )}
      </Styles.Image>

      <Styles.List>
        <Link to={"/browse"} className="StyledLink">
          <li>
            <FaSafari /> Browse
          </li>
        </Link>
        <Link to={"/biblioteca"} className="StyledLink">
          <li>
            <BiLibrary /> Minha Biblioteca
          </li>
        </Link>
        <Link to={"/contact"} className="StyledLink">
          <li>
            <MdEmail /> Contato
          </li>
        </Link>
      </Styles.List>

      <Styles.Search>
        <SlMagnifier />
        <input type="text" placeholder="Pesquisar..." />
      </Styles.Search>

      <Link to={"/login"}>
        <Button>Login</Button>
      </Link>

      <Switcher />
    </Styles.Container>
  );
};

export default Header;
