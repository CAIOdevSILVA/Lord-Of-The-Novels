import React from "react";

import { useSelector } from "react-redux"
import Switcher from "../Switcher";
import Button from "../Button";
import { Link } from "react-router-dom";


import { FaSafari , FaUserCircle} from "react-icons/fa";
import { BiLibrary } from "react-icons/bi";
import { MdEmail, MdLogout } from "react-icons/md";
import { SlMagnifier } from "react-icons/sl";

import image from "../../assets/Lord_Of_The_Novels_Logo.png";
import image2 from "../../assets/Logo-Dark__1.png";
import userImage from "../../assets/userProfile.png"
import * as Styles from "./style";

const Header = () => {
  let user = false
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

      {!user ? (
        <Link to={"/login"}>
        <Button>Login</Button>
        </Link>
      ) : (
        <Styles.UserProfile>
          <img src={userImage}/>

          <Styles.ListProfile>
            <Link to={"/UserProfile"} className="ProfileLinks">
              <li>
                <FaUserCircle /> Meu Perfil
              </li>
            </Link>
            <Link to={"/biblioteca"} className="ProfileLinks">
              <li>
                <BiLibrary /> Minha Biblioteca
              </li>
            </Link>
            <Link to={"/"} className="ProfileLinks">
              <li>
                <MdLogout /> Logout
              </li>
            </Link>
          </Styles.ListProfile>
        </Styles.UserProfile>
      )}

      <Switcher />
    </Styles.Container>
  );
};

export default Header;
