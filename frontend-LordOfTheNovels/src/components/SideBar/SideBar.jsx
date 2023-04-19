import { Link } from "react-router-dom";

//icons
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { TbBrandSafari } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { ImBooks } from "react-icons/im"

import { Switcher } from "../index";

import img from "../../assets/profile.png";
import * as Styles from "./style";

const user = {
  name: "Caio Silva",
  email: "caiossantosp5560@gmail.com",
  image: img,
  active: false,
};

const SideBar = () => {
  return (
    <Styles.Container>
      <Styles.UserMenu>
        {user.active ? (
          <div className="Wrapper">
            <ul className="ListMenu">
              <li>
                <Styles.UserContainer>
                  <div className="ImageContainer">
                    <Link to={"/profile"}>
                      <FaUserAlt  color="#8c52ff" />
                    </Link>
                  </div>
                  <div className="UserData">
                    <Link to={"/profile"} style={{ textDecoration: "none" }}>
                      <p>{user.name}</p>
                      <p className="smallText">{user.email}</p>
                    </Link>
                  </div>
                </Styles.UserContainer>
              </li>
              <Styles.Item>
                <Link to={"/profile"} className="link">
                  <FaUserAlt size={24} />
                    Meu Perfil
                </Link>
              </Styles.Item>
              <Styles.Item>
                <Link to={"/register"} className="link">
                  <ImBooks size={24} />
                    Minha Biblioteca
                </Link>
              </Styles.Item>
              <Styles.Item>
                <Link to={"/"} className="link">
                  <HiHome size={24} />
                  Home
                </Link>
              </Styles.Item>
              <Styles.Item>
                <Link to={"/browse"} className="link">
                  <TbBrandSafari size={24} />
                  Browse
                </Link>
              </Styles.Item>
              <Styles.Item>
                <Link to={"/contact"} className="link">
                  <MdEmail size={24} />
                  Contato
                </Link>
              </Styles.Item>
              <Styles.Item>
                <Link to={"/"} className="link">
                  <AiOutlineLogin size={24} />
                  Logout
                </Link>
              </Styles.Item>
            </ul>

            <div className="Switcher">
              <span>Mode:</span> <Switcher />
            </div>
          </div>
        ) : (
          <div className="Wrapper">
            <ul className="ListMenu">
              <li>
                <Styles.UserContainer>
                  <div className="ImageContainer">
                    <Link to={"/login"}>
                      <FaUserAlt size={28} color="#8c52ff" />
                    </Link>
                  </div>
                  <div className="UserData">
                    <Link to={"/login"} style={{ textDecoration: "none" }}>
                      <p>Crie Sua Conta!</p>
                    </Link>
                  </div>
                </Styles.UserContainer>
              </li>
              <Styles.Item>
                <Link to={"/login"} className="link">
                  <AiOutlineLogin size={24} />
                  Login
                </Link>
              </Styles.Item>
              <Styles.Item>
                <Link to={"/register"} className="link">
                  <MdOutlineAccountCircle size={24} />
                  Sign Up
                </Link>
              </Styles.Item>
              <Styles.Item>
                <Link to={"/"} className="link">
                  <HiHome size={24} />
                  Home
                </Link>
              </Styles.Item>
              <Styles.Item>
                <Link to={"/browse"} className="link">
                  <TbBrandSafari size={24} />
                  Browse
                </Link>
              </Styles.Item>
              <Styles.Item>
                <Link to={"/contact"} className="link">
                  <MdEmail size={24} />
                  Contato
                </Link>
              </Styles.Item>
            </ul>

            <div className="Switcher">
              <span>Mode:</span> <Switcher />
            </div>
          </div>
        )}
      </Styles.UserMenu>
    </Styles.Container>
  );
};

export default SideBar;
