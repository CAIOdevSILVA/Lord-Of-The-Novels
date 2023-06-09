import styled from "styled-components";

export const Container = styled.div`
  width: ${({ horizontal }) => (horizontal ? "100%" : "10rem")};
  background: ${props => props.theme.colors.CardColor};
  border-radius: 0.3125rem;
  overflow: hidden;
  border-bottom: 2px solid #8c52ff;
  padding: ${({horizontal}) => horizontal ? ".5rem" : "0"};
  display: ${({horizontal}) => horizontal ? "inline-flex" : "inline-block"};
  gap: ${({horizontal}) => horizontal && ".5rem"};
  align-items: ${({horizontal}) => horizontal && "center"};

  .ImageContainer {
    width: ${({horizontal}) => horizontal ? "3rem" : "100%"};
    height: ${({horizontal}) => horizontal ? " 80%" : "75%"};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: 768px){
    width: ${({ horizontal }) => (horizontal ? "100%" : "8.5rem")};
  }

  @media (min-width: 768px) and (max-width: 1024px){
    width: ${({ horizontal }) => (horizontal ? "100%" : "8.5rem")};
  }
`;

export const NovelInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.3rem;
  width: ${({horizontal}) => horizontal ? "80%" : "100%"};

  h3 {
    font-size: ${({horizontal}) => horizontal ? "1.1rem" : ".9375rem"};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover{
      border-bottom: 1px solid ${ props => props.theme.colors.tertiary};
    }

    .link{
      text-decoration: none;
      color: ${props => props.theme.colors.tertiary};
    }
  }

  .novelData {
    display: flex;
    justify-content: space-between;
  
    .raiting {
      display: flex;
      align-items: center;
      font-size: 0.9rem;

      svg{
        color: #FFD06A;
      }
    }

    .ChapterLink {
      font-size: 0.625rem;
      padding: 0.2rem;
      background: #8c52ff;
      border-radius: 5px;

      .link {
        text-decoration: none;
        font-weight: bold;
        color: #f1f5f4;
      }
    }
  }

  @media (max-width: 768px) {
    h3{
      font-size: ${({horizontal}) => horizontal ? "1.1rem" : ".8rem"};
    }

    .novelData{
      .raiting {
        font-size: .75rem;
      }
    }
  }
`;

export const Tags = styled.div`
  display: flex;
  gap: .5rem;
  flex-wrap: wrap;

  .tag{
    padding: .2rem .5rem;
    background: #3e1e68;
    border-radius: 5px;
    font-size: .625rem;
    color: #f1f5f4;
  }
`