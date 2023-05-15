import { useForm } from "react-hook-form"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"

import * as Styles from "./style"

import { Button } from "../index"
import { IoCloseSharp } from "react-icons/io5"
import { AiFillStar } from "react-icons/ai";
import { fetchUser } from "../../data/index"
import { client } from "../../client"

const Modal = ({handleShowModal, id, index}) => {
  const { chapter } = useParams()
  const user = fetchUser()
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)

  const {
    register, 
    handleSubmit,
    formState: { errors }
  } = useForm()

  const addCommentInNovel = async (data) => {
    client
      .patch(id)
      .setIfMissing({ feedback: [] })
      .insert("after", "feedback[-1]", [
        {
          comment: data?.comment,
          _key: uuidv4,
          postedBy: {
            _type: "postedBy",
            _ref: user?._id
          },
          stars: Number(data?.stars)
        }
      ])
      .commit()
      .then(() => {
        alert("Comentário adicionado. Daqui à alguns minutos ele irá aparecer na página! Enquanto isso continue a sua leitura.")
      })  
  }

  const addCommentInChapter = async (data) => {
    client
      .patch(id)
      .setIfMissing({ chapters:[
        {
          feedback: [-1]
        }
      ] })
      .insert("after", `chapters[${index}].feedback[${-1 ?? 0}]`, [
        {
          _key: uuidv4,
          comment: data?.comment,
          postedBy: {
            _type: "postedBy",
            _ref: user?._id
          },
          stars: Number(data?.stars)
        }
      ])
      .commit()
      .then(() => {
        alert("Comentário adicionado. Daqui à alguns minutos ele irá aparecer na página! Enquanto isso continue a sua leitura.")
      })  
  }
  console.log(index)

  return (
    <Styles.Modal>
      <div className="container">
        <div className="modalContainer">
          <div className="modalContainer__header">
            <h1 className="modalTitle">Avaliar</h1>
            <IoCloseSharp size={30} onClick={handleShowModal} />
          </div>
          <div className="setRating">
            <div className="stars">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <label key={index}>
                    <input
                      className="radio"
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}
                      { ...register("stars") }
                    />

                    <AiFillStar
                      color={
                        ratingValue <= (hover || rating) ? "#ffd06a" : "#111"
                      }
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </label>
                );
              })}
            </div>
            <div className="raiting">
              <h3>Sua Nota</h3>
              <p>{rating || 0}</p>
            </div>
          </div>
          <div className="setComment">
            <textarea 
              name="" 
              id="commentArea" 
              className={errors?.comment && "error"}
              placeholder="Digite seu Comentário..."
              { ...register("comment", { required: true }) }
            ></textarea>
            {errors?.comment?.type === "required" && (
              <p className="ErrorMessage">Preencha o campo de comentário</p>
            )}
            <div className="buttonContainer">
              <Button>
                {chapter ? (<>
                  <div onClick={() => {
                    handleSubmit(addCommentInChapter)()
                  }}>
                    Adicionar
                  </div>
                </>) : (
                  <div onClick={() => {
                    handleSubmit(addCommentInNovel)()
                  }}>
                    Adicionar
                  </div>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Styles.Modal>
  );
};


export default Modal;
