import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .categories {
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    font-size: 0.8rem;
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 1rem;
    padding: 0 0.5rem;

    .link {
      padding: 0.3rem 0.5rem;
      background: #3e1e68;
      border-radius: 5px;
      text-align: center;
      text-decoration: none;
      color: #f1f5f4;
      font-weight: bold;
      transition: all .5s;

      &:hover{
        opacity: .8;
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
`;
