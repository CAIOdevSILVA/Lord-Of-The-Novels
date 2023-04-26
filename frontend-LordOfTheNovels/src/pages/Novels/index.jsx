import { useEffect, useState } from "react";

import { Loader, Button } from "../../components/index";

import { AiFillStar } from "react-icons/ai";
import { useParams, Link } from "react-router-dom";
import { client, urlFor } from "../../client";

import * as Styles from "./style";

const ChapterSection = ({ novelSlug, chapter }) => {
  const newDate = new Date(chapter?.publishedAt);
  const formattedDate = new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  }).format(newDate);

  return (
    <>
      <li className="item">
        <Link
          to={`/novels/${novelSlug}/${chapter?.slug.current}`}
          className="link"
        >
          {chapter?.title}
        </Link>
        <span>{formattedDate}</span>
      </li>
    </>
  );
};

const Novels = () => {
  const { novel } = useParams();
  const [novelData, setNovelData] = useState(null);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const getNovel = async (element) => {
    const data = await client.fetch(
      `*[_type == "novels" && slug.current == "${element}"][0]{
        about,
        author,
        chapters[],
        comments[]{
          comment,
          _key,
          postedBy->{
            _id,
            name,
            email,
            imageUrl       
          },
        },
        image,
        slug,
        stars[],
        tags[],
        title 
      }`
    );
    return data;
  };

  const result = novelData?.stars.reduce((star, acc) => {
    const result = (star + acc) / novelData?.stars.length;
    return result;
  }, 0)
  
  const handleShowChapter = () => {
    setShow(show === false ? true : false);
  };
  
  useEffect(() => {
    setLoading(true);
    getNovel(novel).then((response) => {
      setNovelData(response);
      setLoading(false);
    });
  }, [novel]);

  console.log(novelData);

  if (loading) return <Loader message="Carregando a Novel..." />;

  return (
    <Styles.Container>
      <Styles.NovelHeader>
        <div className="logo">
          {novelData?.image && (
            <img src={urlFor(novelData?.image)} alt="Novel-Logo" />
          )}
        </div>
        <Styles.NovelInfo>
          <h1 className="title">{novelData?.title}</h1>
          <div className="author">
            <h3>Author: </h3>
            <span>{novelData?.author}</span>
          </div>

          <div className="novelRating">
            <div className="followers">
              <h3>Seguidores: </h3>
              <span>{novelData?.save ? novelData?.save : 0}</span>
            </div>
            <div className="rating">
              <span>
                <AiFillStar />{" "}
                {novelData?.stars && result.toFixed(1)}
              </span>
              <span className="mark">({novelData?.stars.length} users votaram )</span>
            </div>
          </div>

          <Styles.About>
            {novelData?.about}
            {/* <span>[Mostar mais]</span> */}
          </Styles.About>

          <Styles.Tags>
            {novelData?.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </Styles.Tags>

          <div className="buttons">
            <Link
              to={
                novelData?.chapters
                  ? `/novels/${novelData?.slug?.current}/${novelData?.chapters[0]?.slug?.current}`
                  : ""
              }
            >
              <Button outline={false}>Leia Agora</Button>
            </Link>
            <Button outline={true}>Seguir</Button>
          </div>
        </Styles.NovelInfo>
      </Styles.NovelHeader>

      <Styles.ChaptersSection>
        <h1 className="title">Capítulos</h1>
        {novelData?.chapters && novelData?.chapters.length > 0 ? (
          <>
            <ul>
              {novelData?.chapters
                .slice(0, show ? novelData?.chapters.length : 15)
                .map((chapter) => (
                  <ChapterSection
                    novelSlug={novelData?.slug.current}
                    chapter={chapter}
                  />
                ))}
            </ul>
            {novelData?.chapters.length > 15 && (
              <Styles.Button onClick={handleShowChapter}>
                 Mostrar {show ? "Menos" : "Mais"}
              </Styles.Button>
            )}
          </>
        ) : (
          <p className="alert">Nenhum Capítulo Adicionado ainda!</p>
        )}
      </Styles.ChaptersSection> 
    </Styles.Container>
  );
};

export default Novels;

