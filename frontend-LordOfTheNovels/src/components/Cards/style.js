import styled from "styled-components"

export const Container = styled.article`
  display: grid;
  grid-template-columns: repeat(5, auto);
  padding: 1rem 3rem;
  place-content: center;
  gap: 2rem;
  margin-top: 1rem;

  
  @media (min-width: 320px) and (max-width: 768px) {
    padding: 1rem 2rem;
    grid-template-columns: repeat(2, auto);
  }


  @media (min-width:768px) and (max-width: 1024px){
    grid-template-columns: repeat(3, auto);
  }
`

