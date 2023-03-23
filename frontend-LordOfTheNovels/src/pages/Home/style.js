import styled from "styled-components"

export const Container = styled.main`
  padding: 20px 20px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5rem;
  background: ${({theme}) => theme.colors.background};
`

export const Slider = styled.section`
  width: 90%;
  margin-top: 20px;
`
export const ImageSlide = styled.div`
  border-radius: 8px;
  overflow: hidden;


  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`


export const Releases = styled.section`
  width: 80%;
`
export const Indications = styled.section`
  width: 80%;
`

export const Tags = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  

  div{
    padding: 0 1rem;
    display: grid;
    place-content: center;
    grid-template-columns: auto auto auto;
    gap: 2rem;
    margin: 1rem;
  }
`

export const Title = styled.section`
  font-size: 30px;
  font-weight: bold;
  position: relative;
  display: flex;
  flex-direction: column-reverse;

  &::after{
    content: "";
    width: 315px;
    height: 3px;
    background: ${({theme}) => theme.colors.primary};
    position: absolute;
  }
`
export const Tag = styled.span`
  width: 250px;
  height: 40px;
  background: ${({theme}) => theme.colors.primary};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  border-radius: 5px;
  color: ${({theme}) => theme.colors.buttonText};
  transition: transform .5s;


  &:hover{
    transform: scale(1.1);
  }

  &:active{
    transform: scale(1);
    border: 2px solid ${({theme}) => theme.colors.primary};
    background: #fff;
    color: ${({theme}) => theme.colors.primary};
  }
`