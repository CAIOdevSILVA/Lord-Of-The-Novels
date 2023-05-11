import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0px;
  background-color: rgba(17, 17, 17, 0.8);
  position: absolute;
  z-index: 1000;
`;

export const UserMenu = styled.div`
  width: 70%;
  height: 100%;
  right: 0;
  position: absolute;
  background: #8c52ff;
  z-index: 9999;

  .Wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .Switcher{
      padding: 1rem 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid #3e1e68;

      span{
        font-size: 1.1rem;
        font-weight: bold;
      }
    }
  }

  .ListMenu {
    list-style: none;
    display: flex;
    flex-direction: column;

    li {
      padding: 1rem 1rem;
      border-bottom: 1px solid #3e1e68;
    }


    &:first-child {
      margin-top: 1rem;
    }

    &:last-child {
      bottom: 0;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 50%;
  }
`;


export const UserContainer = styled.div`
  display: flex;
  gap: 1rem;

  .ImageContainer {
    width: 3.75rem;
    height: 3.75rem;
    background: #f1f5f4;
    border-radius: 3.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    svg{
      font-size: 1.75rem;
    }
   
    .link{
      width: 100%;
      height: 100%;

      img{
        width: 100%;
        object-fit: cover;
      }
    }
  }

  .UserData {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1rem 0;

    p {
      color: #f1f5f4;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 10rem;
      white-space: nowrap;

      &.smallText{
        font-size: .7rem;
      }
    }
  }

  @media (max-width: 360px) {
   .ImageContainer{
    width: 3rem;
    height: 3rem;
    border-radius: 3rem;

    svg{
      font-size: 1.2rem;
    }
   }

   .UserData{
    p{
      font-size: .9rem;
    }
   }
  }
`;


export const Item = styled.li`
  transition: all .5s;
  cursor: pointer;

  &:hover {
    background-color: #3e1e68;
  }

  .link{
    text-decoration: none;
    color: #f1f5f4;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: .2rem;
  }


  @media(max-width: 360px){
    font-size: .8rem;
  }
`