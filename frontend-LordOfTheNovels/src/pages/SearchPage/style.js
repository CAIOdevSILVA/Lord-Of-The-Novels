import styled from "styled-components"

export const Container = styled.section`
  padding: 2rem 1.25rem; 


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
`