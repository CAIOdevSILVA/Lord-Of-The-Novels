import { GoogleLogin } from "@react-oauth/google";
import { LoginSocialFacebook } from "reactjs-social-login"
import { FacebookLoginButton } from "react-social-login-buttons"
import { useNavigate } from "react-router-dom";
import { client } from "../../client"
import jwt_decode from "jwt-decode"

import logo from "../../assets/Logo-Dark__1.png";
import * as Styles from "./style";

const Register = () => {
  const navigate = useNavigate()

  const onGoogleSubmit = async (data) => {
    const userDecode = jwt_decode(data.credential)

    const user = {
      name: userDecode?.name,
      imageUrl: userDecode?.picture,
      _id: userDecode?.sub,
      _type: "user"
    }
  
    localStorage.setItem("user", JSON.stringify({ ...user, email: userDecode?.email}))

    client.createIfNotExists(user)
      .then(() => {
        navigate("/")
        window.location.reload()
      })
  };

  const onFacebookSubmit = async ({ data }) => {
    const user = {
      name: data?.name,
      imageUrl: data?.picture?.data.url,
      _id: data?.id,
      _type: "user"
    }

    localStorage.setItem("user", JSON.stringify({ ...user, email: data?.email}))

    client.createIfNotExists(user)
      .then(() => {
        navigate("/")
        window.location.reload()
      })
  }

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
            onSuccess={(response) => { onGoogleSubmit(response) }}
            shape="rectangular"
            theme="filled_black"
            text="continue_with"
          />

          <LoginSocialFacebook
            appId={import.meta.env.VITE_FACEBOOK_APP_ID}
            onResolve={(res) => {
              onFacebookSubmit(res)
            }}
            onReject={(error) => {console.log(error)}}
          >
            <FacebookLoginButton />
          </LoginSocialFacebook>
        </div>
      </Styles.Wrapper>
    </Styles.Container>
  );
};

export default Register;
