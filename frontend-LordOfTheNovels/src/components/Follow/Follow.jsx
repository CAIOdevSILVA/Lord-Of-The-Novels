import { Link } from "react-router-dom";

import { novels } from "../../data";

import * as Styles from "./style";


const user = {
  active: false
}

const Follow = () => {


  return (
    <Styles.Container>
      <Styles.Title>{user.active ? "Você Segue" : "Crie uma Conta"}</Styles.Title>
      {user.active ? (
        <div className="follow">
        {novels.map((novel) => (
          <Link key={novel.name} className="link" to={`/novels/${novel.name}`}>
            {novel.name}
          </Link>
        ))}
      </div>
      ) : (
        <div className="NoFollow">
          <p>Ainda não tem uma conta na Plataforma ?</p>
          <p><Link className="link" to={"/register"}>Clique aqui </Link> 
           para ir para página de registro.</p>
        </div>
      )}
    </Styles.Container>
  );
};

export default Follow;
