import { useEffect, useState } from "react";

import { Loader,Comment } from "../../components/index";

import { Link, useParams } from "react-router-dom";
import { BsFillGearFill } from "react-icons/bs";
import { AiOutlineArrowRight, AiOutlineArrowLeft,AiOutlineClose } from "react-icons/ai";
import { PortableText } from "@portabletext/react";
import { FontSizes } from "../../data/index"

import { client } from "../../client";

import * as Styles from "./style";

const OptionsModal = ({ handleShowModal, handleChangeFontSize, FontSize, handleChangeFontFamily, FontFamily }) => {
  const [fontSize, setFontSize] = useState(FontSize)
  const [fontFamily, setFontFamily] = useState(FontFamily)

  useEffect(() => {

  },[fontSize])

  return (
    <>
      <Styles.ModalContainer>
       <Styles.Modal>
        <div className="container">
          <Styles.ModalHeader>
            <h3>Opções</h3>
            <AiOutlineClose onClick={handleShowModal}/>
          </Styles.ModalHeader>
          <div className="options">
            <div className="fontOptions">
              <h5>Fonte</h5>
              <select id="SelectFontFamily" defaultValue={fontFamily} onChange={(e) => {
                const value = e.target.value
                handleChangeFontFamily(value)
              }}>
                <option value="Nunito Sans, sans-serif">Nunito</option>
                <option value="Poppins, sans-serif">Poppins</option>
                <option value="Merriweather, serif">Merriweather</option>
              </select>
            </div>
            <div className="fontSizeOptions">
              <h5>Tamanho</h5>
              <select id="SelectFontSize" defaultValue={fontSize} onChange={(e) => {
                const value = e.target.value
                handleChangeFontSize(value)
              }} >
                {FontSizes.map((font) => (
                  <option value={font +"px"}>{font}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
       </Styles.Modal>
      </Styles.ModalContainer>
    </>
  );
};

const Chapter = () => {
  const { chapter, novel } = useParams();
  const [novelInfo, setNovelInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [fontSize, setFontSize] = useState("16px")
  const [fontFamily, setFontFamily] = useState("Nunito Sans")

  const getNovel = async (element) => {
    const data = await client.fetch(
      `*[_type == "novels" && slug.current == "${element}"][0]{
        chapters[]{
          _id,
          body,
          slug,
          title,
          feedback[]{
            comment,
            stars,
            postedBy->{
              _id,
              name,
              email,
              imageUrl       
            },
          }
        },
        slug,
        title,
        _id 
      }`
    );
    return data;
  };

  const ptComponents = {
    block: {
      normal: ({ children }) => (
        <p
          style={{
            marginBottom: "1.5rem",
            fontSize: fontSize,
            fontFamily: fontFamily
          }}
          className="NovelColorFont"
        >
          {children}
        </p>
      ),
    },
  };

  const handleChangeFontSize = (value) => {
    setFontSize(value)
  }
  const handleChangeFontFamily = (value) => {
    setFontFamily(value)
  }

  const chapterBody = novelInfo?.chapters.filter((element) => {
    return element?.slug.current === chapter;
  })[0];

  console.log(novelInfo)


  const FindIndex = novelInfo?.chapters.findIndex((element) => {
    return element.title === chapterBody.title
  })


  const handleShowModal = () => {
    setShowModal(showModal === false ? true : false);
  };

  const starRating = chapterBody?.feedback ? chapterBody?.feedback.map((element) => {
    return element.stars
  }).reduce((star, acc) => {
    return star + acc
  }, 0) / chapterBody?.feedback.length : 0


  useEffect(() => {
    setLoading(true);

    getNovel(novel).then((response) => {
      setNovelInfo(response);
      setLoading(false);
    });
  }, [novel]);


  if (loading) return <Loader message={"Estamos Carregando o seu Capitulo."} />;

  return (
    <Styles.Container>
      <Styles.ChapterHeader>
        <div className="headings">
          <Link className="link" to={`/novels/${novelInfo?.slug.current}`}>
            <h1>{novelInfo?.title}</h1>
          </Link>
          <p>{chapterBody?.title}</p>
        </div>
        <div className="NavButtons">
          <select
            id="Chapters"
            onChange={(event) => {
              const selectedChapter = event.target.value;
              const chapterData = novelInfo?.chapters.find(
                (chapter) => chapter.title === selectedChapter
              );
              if (chapterData) {
                const url = `/novels/${novelInfo?.slug.current}/${chapterData?.slug.current}`;
                window.location.href = url;
              }
            }}
           defaultValue={chapterBody?.title}
          >
            {novelInfo?.chapters.map((cap, index) => (
              <option
                key={cap?.title}
                value={cap?.title}
              >
                Cap: {index}
              </option>
            ))}
          </select>

          <button className="options" onClick={handleShowModal}>
            <BsFillGearFill />
            Opções
          </button>
          <div className="navigationButtons">
          <a href={
            FindIndex - 1 < 0 ? 
            `#` 
            :
             `/novels/${novel}/${novelInfo?.chapters[FindIndex - 1]?.slug.current}`
          }
          >
            <button className="arrowButton" style={{cursor: FindIndex - 1 < 0 ? "not-allowed" : "pointer", opacity: FindIndex - 1 < 0 ? ".5" : "1"}} >
                <AiOutlineArrowLeft />
              </button>
           </a>
           <a href={
            FindIndex + 1 >= novelInfo?.chapters.length ? 
            `#` 
            :
             `/novels/${novel}/${novelInfo?.chapters[FindIndex + 1]?.slug.current}`
           }>
            <button className="arrowButton" style={{cursor: FindIndex + 1 >= novelInfo?.chapters.length ? "not-allowed" : "pointer", opacity: FindIndex + 1 >= novelInfo?.chapters.length ? ".5" : "1"}}>
                <AiOutlineArrowRight />
              </button>
           </a>
           
          </div>
        </div>
      </Styles.ChapterHeader>
      <div className="ChapterBodyText">
        <PortableText value={chapterBody?.body} components={ptComponents} />
      </div>

      <Styles.NavDownButtons>
        <a href={
           FindIndex - 1 < 0 ? `/novels/${novel}/${novelInfo?.chapters[0]?.slug.current}` : `/novels/${novel}/${novelInfo?.chapters[FindIndex - 1]?.slug.current}`
        }>
          <button className="arrowDownButton" style={{cursor: FindIndex - 1 < 0 ? "not-allowed" : "pointer", opacity: FindIndex - 1 < 0 ? ".5" : "1"}}>
            <AiOutlineArrowLeft /> Anterior
          </button>
        </a>

        <a href={
           FindIndex + 1 >= novelInfo?.chapters.length ? `/novels/${novel}/${novelInfo?.chapters[novelInfo?.chapters.length - 1]?.slug.current}` : `/novels/${novel}/${novelInfo?.chapters[FindIndex + 1]?.slug.current}`
        }>
          <button className="arrowDownButton" style={{cursor: FindIndex + 1 >= novelInfo?.chapters.length ? "not-allowed" : "pointer", opacity: FindIndex + 1 >= novelInfo?.chapters.length ? ".5" : "1"}}>
            Próximo <AiOutlineArrowRight /> 
          </button>
        </a>
      </Styles.NavDownButtons>

      <Comment comments={chapterBody?.feedback} starRating={starRating} id={novelInfo?._id} index={FindIndex}/>

      {showModal && <OptionsModal 
                      handleChangeFontSize={handleChangeFontSize} 
                      handleShowModal={handleShowModal} 
                      FontSize={fontSize} 
                      handleChangeFontFamily={handleChangeFontFamily}
                      FontFamily={fontFamily}
                      />}
    </Styles.Container>
  );
};

export default Chapter;
