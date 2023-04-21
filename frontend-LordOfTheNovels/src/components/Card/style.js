import styled from "styled-components"

export const Container = styled.div`
  width: ${({vertical}) => vertical ? "100%" : "7.8125rem"};
  height: ${({vertical}) => vertical ? "6.25rem" : "12.5rem"};
  background: red;
  border-radius: .3125rem;
`
