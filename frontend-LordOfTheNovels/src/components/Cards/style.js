import styled from "styled-components"

export const Container = styled.article`

 .CardsContainer {
  display: grid;
  grid-template-columns: repeat(${({vertical}) => vertical ? 1 : 5}, auto);
  margin-top: 1.25rem;
  row-gap: 1rem;
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
`