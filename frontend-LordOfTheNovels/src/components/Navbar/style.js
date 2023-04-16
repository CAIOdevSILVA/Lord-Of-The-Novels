import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.0625rem 1.5625rem;
  border-bottom: 2px solid #8c52ff;

  div{
    display: flex;
    justify-content: space-between;
    gap: 3.125rem;
    align-items: center;
  }
`

export const Logo = styled.div`
  width: 9.0625rem;

  img{
    width: 100%;
    object-fit: contain;
  }
`