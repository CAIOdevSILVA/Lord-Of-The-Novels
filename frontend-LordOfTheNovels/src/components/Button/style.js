import styled from "styled-components"

export const StyledButton = styled.button`
  height: 45px;
  padding: 0 20px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.buttonText};
  background: ${({ theme }) => theme.colors.primary};
  border: 0;
  outline: none;
  border-radius: 5px;
  transition: .3s all;
  box-shadow: 7px 5px 15px -1px rgba(0,0,0,0.5);

  &:hover{
    background:${({ theme }) => theme.colors.buttonHover};
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`