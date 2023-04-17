import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.0625rem 1.5625rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #8c52ff;
  

  .nav-item{
    display: flex;
    justify-content: space-between;
    gap: 3.125rem;
    align-items: center;
  }


  @media (max-width: 768px) {
    .nav-item{
      gap: 1.5rem;
    }
  }
`

export const Logo = styled.div`
  width: 9.0625rem;

  img{
    width: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 7rem;
  }
`

export const ToggleSidebar = styled.div`
  height: 100%;
  display: none;
  align-items: center;


  span{
    position: absolute;
    z-index: 9999;
    cursor: pointer;
    
    &:first-child{
      visibility: ${({active}) => active ? "hidden" : "visible"};
    }
    &:last-child{
      visibility: ${({active}) => !active ? "hidden" : "visible"};
      top: .5rem;
      right: .5rem;
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }

`