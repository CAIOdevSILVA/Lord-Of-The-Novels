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

        @media (max-width: 500px) {
          font-size: 1.3rem;

          svg {
            font-size: 2rem;
          }

          span {
            display: none;
          }
        }
      }
    }

    .listComments {
      list-style: none;
      width: 100%;
      display: flex;
      flex-direction: column;

      gap: 1rem;

      li {
        display: inline-flex;
        flex-direction: column;
        background: #2d2d2d;
        padding: .5rem;
        border-radius: 5px;
        gap: .5rem;

        .UserData {
          display: flex;
          align-items: center;
          width: 100%;
          gap: .5rem;
          padding: .5rem;
          border-bottom: 1px solid #111;

          img {
            width: 3rem;
            height: 3rem;
            object-fit: cover;
          }
          .userName{
            font-size: 1.2rem;
            font-weight: 500;
            
            &::first-letter{
              text-transform: uppercase;
            }
          }
        }

        .comment{
          padding: .5rem;
        }


        @media (max-width: 500px){
          .UserData{
            img{
              width: 2rem;
              height: 2rem;
            }

            .userName{
              font-size: 1rem;
            }
          }

          .comment{
            font-size: .8rem;
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
