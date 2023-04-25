import styled from "styled-components"

export const Container = styled.main`
  display: flex;
  padding: 2rem 1.5rem;
  width: 100%;
  gap: 1rem;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 1024px){
    padding: 2rem .5rem;
    gap: 3rem;
  }
`

export const CardsContainer = styled.div`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  gap: 3rem;

`