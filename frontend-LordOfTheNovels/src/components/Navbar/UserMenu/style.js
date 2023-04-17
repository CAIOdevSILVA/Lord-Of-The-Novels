import styled from "styled-components"

export const UserContainer = styled.div`
  width: 3.75rem;
  height: 3.75rem;
  background: #8c52ff;
  border-radius: 3.75rem;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }

  div{
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 3.75rem;

    svg{
      position: absolute;
      font-size: 1.875rem;
      left: 15px;
    }
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  

  .UserProfile {
    position: absolute;
    top: 4rem;
    left: -5rem;
    border-radius: 5px;
    background: #8c52ff;
    width: 15rem;
    height: ${({active}) => active ? "16rem" : "12rem"};
    overflow: hidden;
    display: ${({show}) => show ? "block" : "none"};

    ul{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      list-style: none;

      li{
        font-size: 1.3rem;
        padding: 1rem 1rem;
        transition: all .5s;
        cursor: pointer;

        &:hover:not(:last-child){
          background: #3e1e68;
        }
        &:not(:last-child){
          border-bottom: 1px solid #3e1e68;
        }

        &:last-child{
          display: flex;
          align-items: center;
          gap: 3rem;

          span{
            font-weight: bold;
          }
        }

        .link{
          text-decoration: none;
          color: #f1f5f4;
          font-weight: bold;
        }
      }
    }
  }

`

