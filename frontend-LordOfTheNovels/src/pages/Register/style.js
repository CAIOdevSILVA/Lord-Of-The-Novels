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
  display: inline-flex;
  flex-direction: column;
  gap: 1rem;
  width: 20rem;
  background: #f1f5f4;
  padding: 2rem;
  border-radius: 5px;

  .Login__Header{
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid #8c52ff;

    .Login__header-logo{
      display: flex;
      justify-content: center;
      width: 100%;
      margin-bottom: 2rem;
      
      img{
        width: 10rem;
        object-fit: cover;
      }
    }

    .Login__header-title{
      font-family: 1.2rem;
    }
    .Login__header-description{
      font-size: .9rem;
      margin-bottom: 1rem;
    }
  }

  .Login__buttons{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    .facebook{
    width: 15.5rem;
    height: 2.5rem;
    background: #8c52ff;
  }
}

`
