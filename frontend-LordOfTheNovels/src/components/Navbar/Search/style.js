import styled from "styled-components";

export const Search = styled.div`
  width: 3.75rem;
  height: 3.75rem;
  background-color: ${(props) => (props.active ? "#f1f5f4" : "#8c52ff")};
  border-radius: 3.75rem;
  display: flex;
  gap: 0.8rem;
  position: relative;
  transition: all 0.5s;
  border: ${({ active }) => active && "1px solid #8c52ff"};
  overflow: hidden;

  &.active {
    width: 25rem;
    border-radius: 8px;
  }
  .iconContainer {
    width: 3rem;

    svg {
      font-size: 2rem;
      top: 0.9375rem;
      position: absolute;
      left: 0.9375rem;
      z-index: 9999;
      color: ${(props) => (props.active ? "#8c52ff" : "#f1f5f4")};
    }
  }


  @media (max-width: 1346px) {
    .active{
      width: 23rem;
    }
  }
`;

export const InputContainer = styled.div`
  display: none;
  gap: 0.5rem;
  height: 100%;
  width: 84.5%;
  overflow: hidden;

  &.active {
    display: flex;
  }

  input {
    width: 70%;
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
    font-size: 1.1rem;

    &::placeholder {
      font-size: 1rem;
    }
  }

  button {
    width: 30%;
    height: 100%;
    border: none;
    outline: none;
    background: #8c52ff;
    font-size: 1.1rem;
    font-weight: bold;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;

    .link {
      text-decoration: none;
      color: #f1f5f4;
    }
  }

`;

//Mobile Design

export const SearchMobile = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: #8c52ff;
  border-radius: 2.5rem;
  position: relative;

  svg {
    font-size: 1.5rem;
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
  }

  .mobileInput {
    display: ${({ active }) => (active ? "block" : "none")};
    position: absolute;
    width: 20rem;
    height: 3rem;
    top: 1rem;
    left: -21rem;
    z-index: -1000;
    border-radius: 5px;
    overflow: hidden;
    transition: top 0.5s;

    &.active {
      top: 4rem;
      z-index: 1000;
    }

    input {
      width: 75%;
      height: 100%;
      padding: 5px 10px;
      outline: none;
      border: 1px solid #8c52ff;
      font-size: 1rem;
    }

    button {
      width: 25%;
      height: 100%;
      background: #8c52ff;
      color: #f1f5f4;
      border: none;
      outline: none;
      font-size: 0.8rem;
      font-weight: bold;

      .link {
        text-decoration: none;
        color: #f1f5f4;
      }
    }

    @media (min-width: 360px) and (max-width: 767px) {
      width: 18rem;
      height: 2.5rem;
      left: -13rem;

      .input{
        font-size: .8rem;

        &::placeholder{
          font-size: .5rem;
        }
      }
    }
  }
`;
