import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .follow {
    display: flex;
    flex-direction: column;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    gap: .75rem;

    .link{
      text-decoration: none;
      font-size: .8rem;
      transition: .3s;
      color: #f1f5f4;

      &:hover{
        margin-left: .3125rem;
        border-right: 5px solid #8c52ff;
      }
    }
  }

  .NoFollow{
    display: flex;
    flex-direction: column;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    gap: .5rem;

    .link{
      text-decoration: none;
      color: #8c52ff;
    }
  }
`

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
