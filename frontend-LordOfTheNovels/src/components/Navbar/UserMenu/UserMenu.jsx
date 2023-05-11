import { useState } from "react"
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { googleLogout } from "@react-oauth/google"

//Components
import { Switcher } from "../../index";
import { fetchUser } from "../../../data/index"

import * as Styles from "./style";

const UserMenu = () => {
  const [showProfile, setShowProfile] = useState(false)
  
  const handleShowProfile = () => {
    setShowProfile(showProfile === false ? true : false)
   
  }

  const removeToLocalStorage = () => localStorage.clear()
  const user = fetchUser()

  return (
    <Styles.UserContainer
      active={user}  
      onClick={handleShowProfile} 
      >
      <div className="iconContainer">
        {user ? <img src={user?.picture} alt="UserProfile-Logo" /> : <FaUserAlt />}
      </div>

      <Styles.UserProfile className={`${showProfile ? "showActiveProfile" : ""}`} show={showProfile}>
        {user ? (
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
            <li onClick={() => {
              googleLogout()
              removeToLocalStorage()
              window.location.reload()
            }}>
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
              <span>Mode:</span> <Switcher />
            </li>
          </ul>
        )}
      </Styles.UserProfile>
    </Styles.UserContainer>
  );
};

export default UserMenu;
