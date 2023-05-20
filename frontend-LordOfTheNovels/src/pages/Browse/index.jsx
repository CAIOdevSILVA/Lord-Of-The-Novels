import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsFillEmojiFrownFill } from "react-icons/bs"

import { Categories, Cards, Loader } from "../../components/index";
import { client } from "../../client";

import * as Styles from "./style";

const Browse = () => {
  const { category } = useParams();
  const [novelsInfo, setNovelsInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const getNovelsPerCategories = async (category) => {
    const data =
      await client.fetch(`*[_type == 'novels' && '${category}' in tags[] ]{
      title,
      slug,
      chapters[-1],
      feedback[]{
        stars
      },
      image,
    }`);
    return data;
  };

  useEffect(() => {
    setLoading(true)
    getNovelsPerCategories(category).then((response) => {
      setNovelsInfo(response);
      setLoading(false)
    });
  }, [category]);

  return (
    <Styles.Container>
      <Categories size={"5.5rem"} columns={2} />

      <Styles.CategotySearch>
        {!loading ? (
        <>
          {novelsInfo && novelsInfo.length > 0 ? (
          <Cards
            title={`Resultado da busca pela categoria: '${category}'`}
            novels={novelsInfo}
          />
        ) : (
          <div className="noResults">
            <h1>Resultado da busca pela categoria: '{category.toUpperCase()}'</h1>
            <div className="content">
              <h3>Nenhum Resultado encontrado</h3> <BsFillEmojiFrownFill />
            </div>
          </div>
        )}
        </>
        ) : (
          <Loader message={"Estamos carregando as Novels!"}/>
        )}
      </Styles.CategotySearch>
    </Styles.Container>
  );
};

export default Browse;
