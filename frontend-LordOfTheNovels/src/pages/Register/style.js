import styled from "styled-components"

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #111;
  overflow: auto;
  padding: 2rem 0;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  gap: 1rem;
  padding: 1rem 2.5rem;
  justify-content: center;
  align-items: center;
  border: 2px solid #8c52ff;
  border-radius: 5px;

  .Register__Header{
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    color: #8c52ff;

    img{
      width: 10rem;
    }
    h3{
      color: #8c52ff;
      
    }
  }

  .Register__Form{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    .Register__Email, .Register__Password, .Register__Name, .Register__Check__Password{
      display: flex;
      flex-direction: column;

      label{
        font-size: .8rem;
        color: #8c52ff;
      }

      input{
        outline: none;
        border: none;
        border-radius: 5px;
        height: 2.5rem;
        padding: 0 .5rem;
        font-size: 1rem;
        color: #f1f5f4;
        background: #2d2d2d;

        &.error{
          border: 2px solid #e33d33;
        }

        &::placeholder{
          font-size: .8rem;
          opacity: .5;
        }
      }
    }

    .error-message{
      margin-top: .5rem;
      font-size: .6rem;
      color: #e33d33;
      font-weight: bold;
      text-transform: uppercase;
    }

    .btn{
      padding: .8rem;
      border-radius: 5px;
      outline: none;
      border: none;
      background-color: #8c52ff;
      color: #f1f5f4;
      font-size: 1rem;
      margin-top: 1rem;
      cursor: pointer;
    }
  }

  .Span__Text{
    color: rgba(111, 111, 111, .8);
    opacity: .5;
  }

  .Register__Google{
    width: 100%;
    height: 40px;
    border-radius: 5px;
    background-color: darkgreen;
  }

  .Register__Facebook{
    width: 100%;
    height: 40px;
    border-radius: 5px;
    background-color: darkblue;
  }

  .noAccount{
    margin-top: 1.5rem;
    color: rgba(111, 111, 111, .8);

    .link{
      text-decoration: none;
      color: #8c52ff;
      cursor: pointer;
    }
  }
` 