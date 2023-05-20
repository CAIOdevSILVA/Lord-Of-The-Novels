import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 1.25rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 50%;

    .inputs {
      display: flex;
      gap: 2rem;

      .inputTextContainer {
        display: flex;
        flex-direction: column;
        width: 100%;
        position: relative;
        height: 3.2rem;
        background-color: #2d2d2d;
        border-radius: 5px;
        padding: 0.5rem 0.5rem;

        input {
          border: none;
          outline: none;
          background: transparent;
          width: 100%;
          color: #f1f5f4;
          font-size: 1rem;
          margin-top: 0.5rem;

          &::placeholder{
          font-size: .8rem;
          text-transform: none;
        }
        }

        .errors {
          position: absolute;
          bottom: -20px;
          left: 0;
          color: #e33d33;
          font-size: 0.6rem;
          text-transform: uppercase;
        }

        &.error {
          border: 1px solid #e33d33;
        }
      }

      @media(max-width: 769px){
        flex-direction: column;
      }
    }

    .textAreaContainer {
      #textArea {
        width: 100%;
        height: 10rem;
        border-radius: 5px;
        border: none;
        outline: none;
        background-color: #2d2d2d;
        color: #f1f5f4;
        resize: none;
        padding: 0.5rem 0.5rem;
        color: #f1f5f4;
        font-size: 1rem;

        &.error {
          border: 1px solid #e33d33;
        }

        &::placeholder{
          font-size: .8rem;
          text-transform: none;
        }
      }

      .errors {
        color: #e33d33;
        font-size: 0.6rem;
        text-transform: uppercase;
      }
    }

    .btn{
      width: 10rem;
      height: 3rem;
      border: none;
      outline: none;
      font-size: 1rem;
      background-color: #8c52ff;
      color: #f1f5f4;
      border-radius: 5px;
      cursor: pointer;
    }



    @media (max-width: 768px){
      width: 100%;
    }
  }
`;

export const Title = styled.h1`
  font-size: 1.7rem;
  position: relative;

  &::before {
    content: "";
    width: 5rem;
    height: 4px;
    background-color: #8c52ff;
    position: absolute;
    bottom: 0;
  }
`;
