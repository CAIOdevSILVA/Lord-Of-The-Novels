import styled from "styled-components"

export const Container = styled.div`
  padding: 2rem 1.25rem;
  display: flex;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

export const CategotySearch = styled.div`
  border-left: 1px solid #8c52ff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .noResults{
    height: 29vh;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h1{
      font-size: 2rem;
      position: relative;

      &::before{
        position: absolute;
        content: "";
        width: 10rem;
        height: 5px;
        background-color: #8c52ff;
        bottom: 0;
      }
    }

    .content {
      display: flex;
      gap: .5rem;

      svg{
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: 768px) {
    border: none;
  }
`