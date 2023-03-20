import styled from "styled-components"

export const StyledButton = styled.button`
  height: 45px;
  padding: 0 15px;
  font-size: 18px;
  color: #ffffff;
  background: #3e1e68;
  border: 0;
  outline: none;
  border-radius: 5px;
  transition: .3s all;
  box-shadow: 7px 5px 15px -1px rgba(0,0,0,0.5);

  &:hover{
    background: #ffffff;
    outline: 2px solid #3e1e68;
    color: #3e1e68;
  }
`