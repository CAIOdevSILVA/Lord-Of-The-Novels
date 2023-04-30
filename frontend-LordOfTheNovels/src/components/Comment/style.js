import styled from "styled-components";

export const CommentSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .title {
    font-size: 1.75rem;
    position: relative;

    &::before {
      content: "";
      width: 7rem;
      height: 0.125rem;
      background: #8c52ff;
      position: absolute;
      bottom: 0;
    }

    @media (max-width: 768px) {
      font-size: 1.25rem;

      &::before {
        width: 6rem;
      }
    }
  }

  .commentsContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .addComment {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 1rem;
      align-items: center;

      .Novelrating {
        font-size: 2rem;
        display: flex;
        align-items: center;

        svg {
          font-size: 3rem;
          color: #ffd06a;
          margin-right: 0.5rem;
        }

        span {
          font-size: 0.8rem;
          margin-left: 0.5rem;
        }
      }

      button {
        padding: 0.8rem 2rem;
        border-radius: 5px;
        background: #8c52ff;
        outline: none;
        border: none;
        color: #f1f5f4;
        font-size: 1.2rem;
        transition: all 0.5s;
        cursor: pointer;

        &:hover {
          background: #3e1e68;
        }
      }
    }

    .listComments {
      list-style: none;
      width: 100%;
      flex-direction: column;
      border-radius: 5px;
      background: #2d2d2d;

      li {
        padding: 1rem;
        border-bottom: 1px solid #111;
        display: inline-flex;
        width: 100%;

        &:last-child {
          border: none;
        }

        .UserImage {
          width: 8%;

          img {
            width: 3rem;
            height: 3rem;
            object-fit: cover;
          }
        }

        .comment {
          display: flex;
          flex-direction: column;
          font-size: 0.9rem;

          .userName {
            font-weight: bold;
            font-size: 1.2rem;

            &::first-letter {
              text-transform: uppercase;
            }
          }
        }
      }
    }

    .noComment {
      padding: 1rem;
      border-radius: 5px;
      background: #2d2d2d;
    }
  }
`;
