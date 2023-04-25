import { useState } from "react"
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

//Components
import { Switcher } from "../../index";

import * as Styles from "./style";
import img from "../../../assets/profile-123456.png";

const UserMenu = () => {
  const [showProfile, setShowProfile] = useState(false)
  
  const handleShowProfile = () => {
    setShowProfile(showProfile === false ? true : false)
   
  }


  const user = {
    name: "Caio",
    image: img,
    active: true,
  };

  return (
    <Styles.UserContainer
      active={user.active}  
      onClick={handleShowProfile} 
      >
      <div className="iconContainer">
        {user.active ? <img src={img} alt="UserProfile-Logo" /> : <FaUserAlt />}
      </div>

      <Styles.UserProfile className={`${showProfile ? "showActiveProfile" : ""}`} show={showProfile}>
        {user.active ? (
          <ul className="UserLinks">
            <li>
              <Link className="link" to={"/profile"}>
                Meu perfil
              </Link>
            </li>
            <li>
              <Link className="link" to={"/library"}>
                Minha Biblioteca
              </Link>
            </li>
            <li>
              <Link className="link" to={"/"}>
                Logout
              </Link>
            </li>
            <li>
              <span>Mode:</span> <Switcher />
            </li>
          </ul>
        ) : (
          <ul className="UserLinks">
            <li>
              <Link className="link" to={"/login"}>
                Login
              </Link>
            </li>
            <li>
              <Link className="link" to={"/register"}>
                Sing Up
              </Link>
            </li>
            <li>
              <span>Mode:</span> <Switcher />
            </li>
          </ul>
        )}
      </Styles.UserProfile>
    </Styles.UserContainer>
  );
};

export default UserMenu;
