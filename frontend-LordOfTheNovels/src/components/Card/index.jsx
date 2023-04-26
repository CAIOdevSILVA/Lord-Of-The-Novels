import { Link } from "react-router-dom";

import { AiFillStar } from "react-icons/ai";
import * as Styles from "./style";

import { urlFor } from "../../client";

const Card = ({ novel, vertical }) => {

  const result = novel?.stars.reduce((star, acc) => {
    const result = (star + acc) / novel?.stars.length;
    return result;
  }, 0)


  return (
    <Styles.Container vertical={vertical}>
      <div className="ImageContainer">
        <img src={urlFor(novel?.image)} alt="Novel Image" />
      </div>
      <Styles.NovelInfo>
        <h3>{novel?.title}</h3>
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
            {result.toFixed(1)}
          </span>
          <span className="ChapterLink">
            <Link to={`/novels/${novel.slug.current}`} className="link">
              Cap: {novel.cap}
            </Link>
          </span>
        </div>
      </Styles.NovelInfo>
    </Styles.Container>
  );
};

export default Card;
