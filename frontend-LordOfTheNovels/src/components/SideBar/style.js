import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0px;
  background-color: rgba(17, 17, 17, 0.8);
  position: absolute;
`;

export const UserMenu = styled.div`
  width: 70%;
  height: 100%;
  right: 0;
  position: absolute;
  background: #8c52ff;

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
`