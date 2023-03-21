import styled from "styled-components"

export const Container = styled.header `
  width: 100%;
  height: 72px;
  padding: 5px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({theme}) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.secundary};
`
export const Image = styled.div`
  width: 137px;
  height: 60px;

  img{
    object-fit: conver;
    width: 100%;
    height: 100%;
  }
`

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  gap: 5px;
  

  .StyledLink{
    text-decoration: none;
    color: ${({ theme }) => theme.colors.headerColor};
    li{
      display: flex;
      gap: 2px;
      font-size: 18.3px;
      transition: color .3s;
    }
    svg{
      color: ${({ theme }) => theme.colors.iconColors};
      font-size: 25px;
      transition: color .3s;
    }
    &:hover{
      li{
        color:${({ theme }) => theme.colors.headerColorHover};
      }
      svg {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`

export const Search = styled.div`
  width: 373px;
  height: 48px;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 5px;

  input {
    outline: none;
    border: none;
    background: transparent;
    caret-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    height: 100%;

    &::placeholder{
      font-size: 18px;
      color: ${({ theme }) => theme.colors.placeholder};
    }
  }

  svg{
    font-size: 20px;
    color:${({ theme }) => theme.colors.placeholder};
  }

`

export const UserProfile = styled.div`
  width: 50px;
  height: 50px;
  background: #d9d9d9;
  position: relative;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover{
    ul{
      display: block;
    }
  }
`

export const ListProfile = styled.ul`
  display: none;
  position: absolute; 
  border-radius: 5px;
  z-index: 1000;
  width: 180px;
  height: 117px;
  background: ${({theme}) => theme.colors.primary};
  left: -60px;
  top: 52px;
  list-style: none;
  padding: 12px 20px;

  .ProfileLinks{
    text-decoration: none;
    

    li{
      color: ${({theme}) => theme.colors.buttonText};
      font-size: 15px;
      margin-bottom: 8px;

      svg{
        font-size: 21px;
      }
  }
  }

`

