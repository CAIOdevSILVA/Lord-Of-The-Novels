import { Link } from 'react-router-dom'

import { AiFillStar } from "react-icons/ai"
import * as Styles from "./style"

const Card = ({novel, vertical}) => {
  return (
    <Styles.Container vertical={vertical}>
      <div className="ImageContainer">
        <img src={novel.image} alt="Novel Image" />
      </div>
      <Styles.NovelInfo>
        <h3>{novel.name}</h3>
        {vertical && (
          <Styles.Tags>
            {novel.tags.map((tag) => (
              <span className='tag' key={tag}>{tag}</span>
            ))}
          </Styles.Tags>
        )}
        <div className='novelData'>
          <span className="raiting"><AiFillStar size={18}/>{novel.raiting}</span>
          <span className='ChapterLink'>
            <Link to={novel.link} className='link'>Cap: {novel.cap}</Link>
          </span>
        </div>
      </Styles.NovelInfo>
    </Styles.Container>
  )
}

export default Card