import styled from "styled-components";

export const Modal = styled.section`
  width: 100vw;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  .container {
    width: 100%;
    height: 100%;
    background-color: rgba(17, 17, 17, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;

    .modalContainer {
      background: #f1f5f4;
      width: 30rem;
      border-radius: 5px;
      color: #111;
      display: inline-flex;
      flex-direction: column;
      gap: 2rem;
      padding: 1rem 1rem;

      .modalContainer__header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .modalTitle {
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

        svg {
          cursor: pointer;
        }
      }

      .setRating {
        display: flex;
        justify-content: space-around;
        align-items: center;

        .stars {

          svg{
            font-size: 3rem;
            cursor: pointer;
          }
          .radio {
            display: none;
          }
        }

        .raiting {
          border: 1px solid #8c52ff;
          width: 8rem;
          height: 8rem;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          align-items: center;

          p {
            font-size: 4rem;
          }
        }
      }

      .setComment{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        #commentArea{
          width: 100%;
          height: 10rem;
          resize: none;
          border: 1px solid #8c52ff;
          border-radius: 5px;
          padding: .5rem;
          caret-color: #8c52ff;
          font-size: 1.1rem;
          outline: none;

          &::placeholder{
            font-size: .9rem;
          }
        }

        .buttonContainer{
          width: 100%;
          display: flex;
          justify-content: flex-end;
        }
      }
    }
  }
`;
