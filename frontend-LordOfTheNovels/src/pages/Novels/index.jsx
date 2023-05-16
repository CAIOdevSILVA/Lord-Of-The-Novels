import { useEffect, useState } from "react";

import { Loader, Button, Comment } from "../../components/index";
import { v4 as uuidv4 } from "uuid"
import { fetchUser } from "../../data";

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
  const [showAbout, setShowAbout] = useState(false)
  const [follow, setFollow] = useState(false)
  const user = fetchUser()
  
  const [loading, setLoading] = useState(false);

  const getNovel = async (element) => {
    const data = await client.fetch(
      `*[_type == "novels" && slug.current == "${element}"][0]{
        _id,
        about,
        author,
        chapters[],
        feedback[]{
          comment,
          stars,
          _key,
          postedBy->{
            _id,
            name,
            email,
            imageUrl       
          },
        },
        save[]{
          userId,
          postedBy->{
            _id,
            name,
          }
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


  const starRating = novelData?.feedback ? novelData?.feedback.map((element) => {
    return element.stars
  }).reduce((star, acc) => {
    return star + acc
  }, 0) / novelData?.feedback.length : 0

  const isUser = novelData?.save && novelData?.save.filter((element) =>  element?.userId === user?._id)

  const handleShowChapter = () => {
    setShow(show === false ? true : false);
  };

  function truncate(str, n) {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str
  }


  const saveNovel = async () => {
    client
    .patch(novelData?._id)
    .setIfMissing({ save:[] })
    .insert("after", "save[-1]", [
      {
        _key: uuidv4,
        userId: user?._id,
        postedBy: {
          _type: "postedBy",
          _ref: user?._id
        },
      }
    ])
    .commit()
    .then(() => {
      alert("Você esta seguindo a obra agora. Va pra sua Biblioteca conferir!")
      setFollow(true)
    })

  }
  
  useEffect(() => {
    setLoading(true);
    setFollow(false);

    getNovel(novel).then((response) => {
      setNovelData(response);
      setLoading(false);
    });
  }, [novel]);


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
              <span>{novelData?.save ? novelData?.save.length : 0}</span>
            </div>
            <div className="rating">
              <span>
                <AiFillStar /> { starRating > 0 ? starRating.toFixed(1) : 4.5}
              </span>
              <span className="mark">
                ({novelData?.feedback > 0 ? novelData?.feedback.length : 0} users votaram )
              </span>
            </div>
          </div>

          <Styles.About>
            {showAbout ? (
              <>
                {novelData?.about}
              </>
            ) : (
              <>
                {truncate(novelData?.about, 350)}
              </>
            )}
            <span 
              className="ShowMore" 
              onClick={() => setShowAbout(showAbout === false ? true : false)}
            >[Mostar {showAbout ? "Menos" : "Mais"}]</span> 
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
          
            <Link
              to={
                !user && "/login"
              }
            >
                <Button outline={true}>
                  <div onClick={saveNovel}>
                    {isUser && isUser.length > 0 || follow === true  ? "Seguindo" : "Seguir"}
                  </div>
                </Button>
            </Link>
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
                .map((chapter, index) => (
                  <ChapterSection
                    key={index}
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

      {novelData && <Comment comments={novelData?.feedback} id={novelData?._id} getNovel={getNovel} starRating={starRating} />}

    </Styles.Container>
  );
};

export default Novels;
