import styled from "styled-components"

export const Container = styled.div`
  width: 184px;
  height: 328px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 3px 4px 8px 1px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  transition: transform .5s;

  &:hover{
    transform: scale(.96);
  }
`

export const Imagem = styled.div`
  width: 100%;
  height: 70%;
  transition: all .5s;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

`

export const NovelContent = styled.div`
  width: 100%;
  height: 30%;
  padding: 0px 5px 5px 5px;
  display: flex;
  flex-direction: column;
  gap: .3rem;
  position: relative;

`

export const Tags = styled.div`
  width: 100%;
  padding: 5px 5px;
  display: flex;
  justify-content: flex-start;
  column-gap: 5px;

  span{
    font-size: 10px;
    font-weight: bold;
    background: ${({theme}) => theme.colors.primary};
    color: #fff;
    border-radius: 100px;
    padding: 2px 5px;
  }
`

export const Title = styled.h1`
  font-size: 1rem;
  padding: 0 5px;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #000;

`

export const NovelInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 8px 0 5px;
  align-items: center;
`

export const Rating = styled.span`
  font-size: .8rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;

  svg{
    font-size: 1rem;
    color: #E3DD50;
  }

`

export const NextChapter = styled.span`
  font-size: 10px;
  color: ${({theme}) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  transition: transform .5s;

  span{
    padding: 0 8px 0 0;

    strong {
      font-size: 12px;
    }
  }
  
  svg{
    font-size: 1rem;
  }

  &:hover{
    transform: scale(1.1);
  }

`