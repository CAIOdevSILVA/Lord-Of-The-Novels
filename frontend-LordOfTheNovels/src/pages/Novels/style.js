import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 1.25rem 1.25rem;
  gap: 1rem;
`;

export const NovelHeader = styled.section`
  display: inline-flex;
  justify-content: space-between;
  padding: 3rem 0;
  gap: 2rem;

  .logo {
    width: 15.625rem;
    height: 30%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
  }

  .buttons {
    display: flex;
    gap: 2rem;
  }

  .title {
    font-size: 2rem;
    color: #f1f5f4;
  }

  .author {
    display: flex;
    gap: 0.3rem;
    align-items: center;

    span {
      font-size: 0.9rem;
    }
  }

  .novelRating {
    display: flex;
    gap: 4rem;

    .followers {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .rating {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.1rem;

      svg {
        font-size: 1.4rem;
        color: #ffd06a;
      }

      .mark {
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.2);
      }
    }
  }
`;

export const NovelInfo = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const About = styled.p`
  width: 100%;
  font-size: 0.8rem;
  color: #f1f5f4;
`;

export const Tags = styled.div`
  display: flex;
  gap: 0.5rem;

  span {
    font-size: 0.8rem;
    padding: 0.2rem 0.5rem;
    background: #3e1e68;
    border-radius: 5px;
    color: #f1f5f4;
    cursor: pointer;
  }
`;

//Chapters Section

export const ChaptersSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;

  .title {
    font-size: 1.75rem;
    position: relative;

    &::before {
      content: "";
      width: 7rem;
      height: 0.125rem;
      background: #8c52ff;
      position: absolute;
      bottom: 0;
    }

    @media (max-width: 768px) {
      font-size: 1.25rem;

      &::before {
        width: 6rem;
      }
    }
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #2d2d2d;
    border-radius: 5px;
    list-style: none;

    .item {
      width: 100%;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #111;
      align-items: center;

      &:last-child {
        border: none;
      }

      .link {
        text-decoration: none;
        color: #f1f5f4;
        transition: all 0.5s;
        &:hover {
          margin-left: 5px;
        }
      }

      span {
        font-size: 0.7rem;
        color: rgba(255, 255, 255, 0.2);
      }
    }
  }

  .alert {
    padding: 1rem;
    background-color: #2d2d2d;
    color: #f1f5f4;
    border-radius: 5px;
  }
`;

export const Button = styled.button`
  width: 100%;
  text-align: center;
  padding: 1rem;
  background: #8c52ff;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  color: #f1f5f4;
  font-size: 1.1rem;
  outline: none;
  border: none;
`;






