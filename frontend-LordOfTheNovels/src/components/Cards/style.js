import styled from "styled-components"

export const Container = styled.article`

 .CardsContainer {
  display: grid;
  grid-template-columns: repeat(${({vertical}) => vertical ? 1 : 4}, auto); 
  margin-top: 1.25rem;
  gap: 1rem;
 }

 
 @media(max-width:700px ){
   .CardsContainer{
     grid-template-columns: repeat(${({vertical}) => vertical ? 1 : 3}, auto);
     gap: 1rem;
    }
  }
  
  @media(max-width:600px ){
   .CardsContainer{
     grid-template-columns: repeat(${({vertical}) => vertical ? 1 : 2}, auto);
     gap: 1rem;
   }
  }
  
 @media (min-width: 768px) and (max-width: 1024px){
  .CardsContainer{
    gap: 1rem;
  }
 }
`

export const Title = styled.h1`
  font-size: 1.75rem;
  position: relative;

  &::before{
    content: "";
    width: 7rem;
    height: 0.125rem;
    background: #8c52ff;
    position: absolute;
    bottom: 0;
  }

  @media(max-width:768px ){
    font-size: 1.25rem;

    &::before{
      width: 6rem;
    }
  }

`