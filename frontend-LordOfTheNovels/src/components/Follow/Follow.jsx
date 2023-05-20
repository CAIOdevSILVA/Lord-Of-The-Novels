import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { client } from "../../client";
import { fetchUser } from "../../data";

import * as Styles from "./style";


const Follow = () => {
  const [userFollow, setUserFollow] = useState(null)
  const user = fetchUser()

  const getUserNovels = async (userId) => {
    const data = await client.fetch(`*[_type == 'novels' && '${userId}' in save[].userId ] | order(_createdAt desc){
      title,
      slug
    }
    `)
    return data
  }

  useEffect(() => {
    getUserNovels(user?._id)
      .then((response) => {
        setUserFollow(response)
      })
  }, [])


  return (
    <Styles.Container>
      <Styles.Title>{user ? "Você Segue" : "Crie uma Conta"}</Styles.Title>
      {user ? (
        <div className="follow">
        {userFollow && userFollow.length > 0 ? (
          <>
            {userFollow && userFollow.map((novel) => (
            <Link key={novel?.title} className="link" to={`/novels/${novel?.slug.current}`}>
              {novel.title}
            </Link>
          ))}
          </>
        ) : (
          <h5>Você não segue nenhuma obra ainda.</h5>
        )}
      </div>
      ) : (
        <div className="NoFollow">
          <p>Ainda não tem uma conta na Plataforma ?</p>
          <p><Link className="link" to={"/login"}>Clique aqui </Link> 
           para ir para página de registro.</p>
        </div>
      )}
    </Styles.Container>
  );
};

export default Follow;
