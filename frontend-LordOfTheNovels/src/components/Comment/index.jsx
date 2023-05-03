import { useState } from "react";

import img from "../../assets/profile-123456.png";
import { Modal, Button } from "../index";
import { AiFillStar } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";

import * as Styles from "./style";

const Comment = ({ comments, starRating}) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(showModal === false ? true : false);
  };
  return (
    <Styles.CommentSection>
      <h1 className="title">Reviews</h1>
      <div className="commentsContainer">
        <div className="addComment">
          <div className="Novelrating">
            <AiFillStar />
            {starRating > 0 ? starRating.toFixed(1) : "Seja o primeiro a avaliar."}
            {starRating > 0 && <span>({comments && comments.length} users votaram)</span>}
          </div>
          <Button>
            <div onClick={handleShowModal} style={{ display: "flex" }}>
              <FaRegCommentDots /> Avaliar
            </div>
          </Button>
        </div>

        {comments && comments.length > 0 ? (
          <ul className="listComments">
            {comments.map((commentData, index) => (
              <li key={index}>
                <div className="UserData">
                  <img src={img} alt="UserFoto" />

                  <p className="userName">{commentData.postedBy.name}</p>
                </div>
                <div className="comment">
                  <p>{commentData.comment}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="noComment">Seja o primeiro a comentar!</p>
        )}
      </div>

      {showModal && <Modal handleShowModal={handleShowModal} />}
    </Styles.CommentSection>
  );
};

export default Comment;
