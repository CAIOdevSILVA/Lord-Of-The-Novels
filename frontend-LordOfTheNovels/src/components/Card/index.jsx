import { Link } from "react-router-dom";

import { AiFillStar } from "react-icons/ai";
import * as Styles from "./style";

import { urlFor } from "../../client";

const Card = ({ novel, vertical }) => {

  const starRating = novel?.feedback ? novel?.feedback.map((element) => {
    return element.stars
  }).reduce((star, acc) => {
    return star + acc
  }, 0) / novel?.feedback.length  : 4


  return (
    <Styles.Container vertical={vertical}>
      <div className="ImageContainer">
        <img src={urlFor(novel?.image)} alt="Novel Image" />
      </div>
      <Styles.NovelInfo>
        <h3>
          <Link className="link" to={`/novels/${novel.slug.current}`}>
            {novel?.title}
          </Link>
        </h3>
        {vertical && (
          <Styles.Tags>
            {novel.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </Styles.Tags>
        )}
        <div className="novelData">
          <span className="raiting">
            <AiFillStar size={18} />
            {starRating.toFixed(1) }
          </span>
          <span className="ChapterLink">
          {novel?.chapters ? (
            <Link to={`/novels/${novel?.slug.current}/${novel?.chapters.slug.current}`} className="link">
              Cap: { novel?.chapters && novel?.chapters.title.replace(/[^\d]/g, "")} {//Essa função seleciona toas as ocorrencias
                                                                                      //de caracteres não numericos e os substitui
                                                                                      //por uma "" deixando apenas o número 
                                                                                    }
            </Link>                                         
          ) : (
            <Link style={{color:"#f1f5f4", fontSize:".7rem", textDecoration:"none"}} to={`/novels/${novel?.slug.current}`}>
              Ler
            </Link>
          ) 
          }
          </span>
        </div>
      </Styles.NovelInfo>
    </Styles.Container>
  );
};

export default Card;
