import styled from "styled-components";

export const Container = styled.div``;

export const NovelHeader = styled.section`
  display: inline-flex;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem 1.25rem;

  .logo{
    width: 15.625rem;
    height: 30%;
    overflow: hidden;

    img{
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

  .title{
    font-size: 2rem;
  }

  .author{
    display: flex;
    gap: .5rem;
    align-items: center;

    span{
      font-size: .9rem;
    }
  }

  .novelRating{
    display: flex;
    gap: 4rem;

    .followers{
      display: flex;
      align-items: center;
      gap: .5rem;
    }

    .rating{
      display: flex;
      align-items: center;
      gap: .5rem;
      font-size: 1.1rem;

      svg{
        font-size: 1.4rem;
        color: #FFD06A;
      }

      .mark{
        font-size: .8rem;
        color: rgba(255, 255, 255, .2);
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
  width: 90%;
  height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: .8rem;
`;

export const Tags = styled.div`
  display: flex;
  gap: .5rem;
  
  span{
    font-size: .8rem;
    padding: .2rem .5rem;
    background: #3e1e68;
    border-radius: 5px;
    color: #f1f5f4;
    cursor: pointer;
  }
`;
