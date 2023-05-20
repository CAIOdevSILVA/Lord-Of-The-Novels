import styled from "styled-components";

export const Container = styled.div`
  width: auto;

  .categories {
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    font-size: 0.8rem;
    display: grid;
    grid-template-columns: repeat(${({columns}) => columns}, ${({size}) => size});
    gap: 1rem;
    padding: 0 0.5rem;

    .link {
      padding: 0.3rem 0.5rem;
      background: #3e1e68;
      border-radius: 5px;
      text-align: center;
      text-decoration: none;
      color: #f1f5f4;
      transition: all .5s;

      &.active{
        background: #f1f5f4;
        color: #3e1e68;
        border: 2px solif #3e1e68;
      }

      &:hover{
        opacity: .8;
      }


      @media(max-width: 370px ){
        padding: .3rem 0;
        font-size: .7rem;
      }

    }
  }
`;

export const Title = styled.h1`
  position: relative;

  &::before {
    content: "";
    width: 7rem;
    height: 0.125rem;
    background: #8c52ff;
    position: absolute;
    bottom: 0;
  }


  @media(max-width: 400px ){
    font-size: 1.5rem;
  }
`;
