import { useState } from "react"

import * as Styles from "./style"

import { Button } from "../index"
import { IoCloseSharp } from "react-icons/io5"
import { AiFillStar } from "react-icons/ai";

const Modal = ({handleShowModal}) => {
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)

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
            <textarea name="" id="commentArea" placeholder="Digite seu Comentário..."></textarea>
            <div className="buttonContainer">
              <Button>Adicionar</Button>
            </div>
          </div>
        </div>
      </div>
    </Styles.Modal>
  );
};

export default Modal;
