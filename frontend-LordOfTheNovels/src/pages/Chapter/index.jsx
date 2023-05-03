import { useEffect, useState } from "react";

import { Loader } from "../../components/index";

import { Link, useParams } from "react-router-dom";
import { BsFillGearFill } from "react-icons/bs";
import { AiOutlineArrowRight, AiOutlineArrowLeft,AiOutlineClose } from "react-icons/ai";
import { PortableText } from "@portabletext/react";
import { FontSizes } from "../../data/index"

import { client } from "../../client";

import * as Styles from "./style";

const OptionsModal = ({ handleShowModal }) => {

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
              <select id="SelectFont">
                <option value="Nunito">Nunito</option>
                <option value="Popins">Popins</option>
                <option value="Marriweather">Marriweather</option>
              </select>
            </div>
            <div className="fontSizeOptions">
              <h5>Tamanho</h5>
              <select id="SelectFont">
                {FontSizes.map((font) => (
                  <option key={font} value={font}>{font}</option>
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

  const getNovel = async (element) => {
    const data = await client.fetch(
      `*[_type == "novels" && slug.current == "${element}"][0]{
        chapters[],
        slug,
        title 
      }`
    );
    return data;
  };

  const ptComponents = {
    block: {
      normal: ({ children }) => (
        <p
          style={{
            color: "#f1f5f4",
            marginBottom: "1.5rem",
            fontSize: "1.1rem",
          }}
        >
          {children}
        </p>
      ),
    },
  };

  const chapterBody = novelInfo?.chapters.filter((element) => {
    return element?.slug.current === chapter;
  })[0];

  const FindIndex = novelInfo?.chapters.findIndex((element) => {
    return element.title === chapterBody.title
  })

  const handleShowModal = () => {
    setShowModal(showModal === false ? true : false);
  };

  useEffect(() => {
    setLoading(true);

    getNovel(novel).then((response) => {
      setNovelInfo(response);
      setLoading(false);
    });
  }, [novel]);

  console.log(chapterBody);
  console.log(FindIndex);

  if (loading) return <Loader message={"Estamos Carregando o seu Capitulo."} />;

  return (
    <Styles.Container>
      <Styles.ChapterHeader>
        <div className="headings">
          <h1>{novelInfo?.title}</h1>
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
          >
            {novelInfo?.chapters.map((cap, index) => (
              <option
                value={cap?.title}
                selected={cap.slug.current === chapter ? true : false}
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
          <Link to={`/novels/${novelInfo?.slug.current}/${novelInfo?.chapters[FindIndex - 1]?.slug.current}`}>
            <button className="arrowButton">
                <AiOutlineArrowLeft />
              </button>
           </Link>
           <Link to={`/novels/${novelInfo?.slug.current}/${novelInfo?.chapters[FindIndex + 1]?.slug.current}`}>
            <button className="arrowButton">
                <AiOutlineArrowRight />
              </button>
           </Link>
           
          </div>
        </div>
      </Styles.ChapterHeader>
      <div className="ChapterBodyText">
        <PortableText value={chapterBody?.body} components={ptComponents} />
      </div>

      {showModal && <OptionsModal handleShowModal={handleShowModal} />}
    </Styles.Container>
  );
};

export default Chapter;
