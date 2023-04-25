import styled from "styled-components"

export const StyledButton = styled.button`
  padding: .8rem 1.5rem;
  border-radius: 5px;
  border: ${({outline}) => outline ? "2px solid #8c52ff" : "none"};
  outline: none;
  background: ${({outline}) => outline ? "#f1f5f4" : "#8c52ff"};
  color:${({outline}) => outline ? "#8c52ff" : "#f1f5f4"};
  cursor: pointer;
  transition: all .5s;
  font-size: 1rem;
  font-weight: bold;

  &:hover{
    opacity: .8;
  }
`