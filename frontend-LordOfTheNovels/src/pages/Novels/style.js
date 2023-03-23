import styled from "styled-components";


export const Container = styled.div`
  padding: 50px 20px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  background: ${({theme}) => theme.colors.background};

  h1{
    font-size: 1.7rem;
  }

  span{
    font-size: .8rem;
  }
`

export const NovelInfo = styled.section`
  margin-top: 20px;
  width: 80%;
  display: flex;
  gap: 3rem;
  padding: 0 3rem;
`
export const NovelImage = styled.div`
  width: 250px;
  height: 330px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 5px 0px 15px 1px rgba(0,0,0,0.38);

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const NovelData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 65%;
  padding: 1rem 2rem;
`
export const Rating = styled.div`
  display: flex;
  gap: 1rem;

  span{
    strong{
      font-size: 1rem;
      svg{
        font-size: 1rem;
        color: #B9B333;
      }
    }
  }
`

export const About = styled.div`
  font-size: .8rem;
`
export const Tags = styled.div`
  display: flex;
  gap: .5rem;

  span{
    color: #fff;
    background-color: ${({theme}) => theme.colors.primary};
    border-radius: 100px;
    padding: 2px 8px;
  }
`

export const CallToAction = styled.div`
  display: flex;
  gap: 1rem;
`


export const Chapters = styled.section``
export const Reviews = styled.section``
export const Indications = styled.section``
