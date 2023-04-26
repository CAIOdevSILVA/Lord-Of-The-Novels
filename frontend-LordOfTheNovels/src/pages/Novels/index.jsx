import { useEffect, useState } from "react";

import { Loader, Button } from "../../components/index";

import { AiFillStar } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5"
import { FaRegCommentDots } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import { client, urlFor } from "../../client";
import img from "../../assets/profile-123456.png";

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
  const [showModal, setShowModal] = useState(false);
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
  }, 0);

  const handleShowChapter = () => {
    setShow(show === false ? true : false);
  };

  const handleShowModal = () => {
    setShowModal(showModal === false ? true : false);
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
                <AiFillStar /> {novelData?.stars && result.toFixed(1)}
              </span>
              <span className="mark">
                ({novelData?.stars.length} users votaram )
              </span>
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

      <Styles.CommentSection>
        <h1 className="title">Reviews</h1>
        <div className="commentsContainer">
          <div className="addComment">
            <div className="Novelrating">
              <AiFillStar />
              {novelData?.stars && result.toFixed(1)}{" "}
              <span>({novelData?.stars.length} users votaram)</span>
            </div>
            <button
              onClick={handleShowModal}
            >
              <FaRegCommentDots /> Avaliar
            </button>
          </div>

          <ul className="listComments">
            {novelData?.comments.map((comment) => (
              <li>
                <div className="UserImage">
                  <img src={img} alt="UserFoto" />
                </div>
                <div className="comment">
                  <p className="userName">{comment.postedBy.name}</p>
                  <p>{comment.comment}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {showModal && (
        <Styles.Modal >
          <div className="container">
            <div className="modalContainer">
              <h1 className="modalTitle">Avaliar</h1>
              <IoCloseSharp onClick={handleShowModal}/>
              <div className="setRating">
                <div className="stars">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <div className="raiting">
                  <h3>Sua Nota</h3>
                  <p>4.5</p>
                </div>
              </div>
              <div className="setComment">
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <div className="buttonContainer">
                  <button>Adicionar</button>
                </div>
              </div>
            </div>
          </div>
        </Styles.Modal>
      )}
      </Styles.CommentSection>
    </Styles.Container>
  );
};

export default Novels;
