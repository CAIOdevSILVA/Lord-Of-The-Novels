import styled from "styled-components"

export const Container = styled.div `
  width: 100%;
  height: 72px;
  padding: 5px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #d9d9d9;

  .switch{
    position: relative;
  }
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
    color: #6a6a6b;
    li{
      display: flex;
      gap: 2px;
      font-size: 18.3px;
      transition: color .3s;
    }
    svg{
      color: #6a6a6b;
      font-size: 25px;
      transition: color .3s;
    }
    &:hover{
      li{
        color: #000000;
      }
      svg {
        color: #3e1e68;
      }
    }
  }
`

export const Search = styled.div`
  width: 373px;
  height: 48px;
  border-radius: 100px;
  border: 1px solid #3e1e68;
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 5px;

  input {
    outline: none;
    border: none;
    background: transparent;
    caret-color: #3e1e68;

    &::placeholder{
      font-size: 18px;
      color: #d9d9d9;
    }
  }

  svg{
    font-size: 20px;
    color: #d9d9d9;
  }

`

