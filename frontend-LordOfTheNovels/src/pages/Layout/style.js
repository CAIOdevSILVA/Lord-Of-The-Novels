import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 8%;

  background: ${props => props.theme.colors.secundary} ;
  color:${props => props.theme.colors.tertiary};
`