import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { client } from "../../client"
import jwt_decode from "jwt-decode"

import logo from "../../assets/Logo-Dark__1.png";
import * as Styles from "./style";

const Register = () => {
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    const userDecode = jwt_decode(data.credential)

    const user = {
      name: userDecode?.name,
      imageUrl: userDecode?.picture,
      _id: userDecode?.sub,
      _type: "user"
    }
  
    localStorage.setItem("user", JSON.stringify(userDecode))

    client.createIfNotExists(user)
      .then(() => {
        navigate("/")
      })
  };

  return (
    <Styles.Container>
      <Styles.Wrapper>
        <div className="Login__Header">
          <div className="Login__header-logo">
            <img src={logo} alt="Logo Lord of the Novels" />
          </div>
          <h3 className="Login__header-title">Bem vindo</h3>
          <p className="Login__header-description">Faça o login ou registre-se com um toque de forma fácil e rápida.</p>
        </div>
        <div className="Login__buttons">
          <GoogleLogin 
            onSuccess={(response) => { onSubmit(response) }}
            shape="rectangular"
            theme="filled_black"
          />
        </div>
      </Styles.Wrapper>
    </Styles.Container>
  );
};

export default Register;
