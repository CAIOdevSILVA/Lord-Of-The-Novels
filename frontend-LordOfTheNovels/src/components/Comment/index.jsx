import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom"

import img from "../../assets/profile-123456.png";
import { Modal, Button } from "../index";
import { AiFillStar } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";

import { fetchUser } from "../../data/index"

import * as Styles from "./style";

const Comment = ({ comments, starRating, id, index}) => {
  const user = fetchUser()
  const navigate = useNavigate()

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = useCallback(() => {
    setShowModal(showModal === false ? true : false);
  }, [showModal]);

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
            {user ? (
               <div onClick={handleShowModal} style={{ display: "flex" }}>
               <FaRegCommentDots /> Avaliar
             </div>
            ) : (
              <div onClick={() => {navigate("/login")}} style={{ display: "flex" }}>
                <FaRegCommentDots /> Avaliar
              </div>
            )}
          </Button>
        </div>

        {comments && comments.length > 0 ? (
          <ul className="listComments">
            {comments.map((commentData, index) => (
              <li key={index}>
                <div className="UserData">
                  <img src={commentData?.postedBy.imageUrl} alt="UserFoto" />

                  <p className="userName">{commentData?.postedBy.name}</p>
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

      {showModal && <Modal handleShowModal={handleShowModal} id={id} index={index}/>}
    </Styles.CommentSection>
  );
};

export default Comment;
