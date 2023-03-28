import styled from "styled-components"

export const Container = styled.footer`
  width: 100%;
  height: 353px;
  padding: 1% 10%;
  background: ${({theme}) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media(max-width:768px) {
    justify-content: space-around;
  }
`

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px){
    justify-content: space-around;
  }
`

export const InfoSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;

  p{
    color: ${({theme}) => theme.colors.buttonText};
    font-size: 14px;
  }

  @media(max-width: 768px) {
    p{
      font-size: .7rem;
    }
  }
`

export const Social = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  img{
    width: 150px;
    height: 90px;
  }

  @media(max-width:768px) {
    img{
      width: 130px;
      height: 70px;
    }
  }
`

export const Recursos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  h1{
    font-size: 30px;
    color: ${({theme}) => theme.colors.buttonText};
  }

  h3{
    font-size: 16px;
    font-weight: 300;
    color: ${({theme}) => theme.colors.buttonText};

    &:hover{
      color: #222222;
    }
  }

  @media (max-width:768px) {
    h1{
      font-size: 1.7rem;
    }

    h3{
      font-size: .8rem;
    }
  }
`

export const ListSocial = styled.ul`
  display: flex;
  gap: 12px;
  list-style: none;

  .socialLink{
    text-decoration: none;
    li{
      font-size: 30px;
      color: ${({theme}) => theme.colors.buttonText};

      &:hover{
        color: #222222;
      }
    }
  }

  @media(max-width:768px) {
    .socialLink{
      li{
        font-size: 1.7rem;
      }
    }
  }
`