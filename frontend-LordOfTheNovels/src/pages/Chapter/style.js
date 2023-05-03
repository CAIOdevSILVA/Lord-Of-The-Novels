import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  padding: 0 1.25rem;

  .ChapterBodyText{
    .NovelColorFont{
      color: ${props => props.theme.colors.tertiary};
    }
  }

`

export const ChapterHeader = styled.section`
  border-bottom: 1px solid #8c52ff;
  padding: 2rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;


  .NavButtons{
    display: flex;
    align-items: center;
    gap: 2rem;

    #Chapters{
      background-color: #8c52ff;
      color: #f1f5f4;
      outline: none;
      padding: .5rem;
      border: none;
      border-radius: 5px;
      text-align: center;
      cursor: pointer;
      font-weight: bold;

      option{
        background-color: #3e1e68;
      }
    }

    .options{
      padding: .5rem;
      display: flex;
      gap: .4rem;
      align-items: center;
      background-color: #8c52ff;
      color: #f1f5f4;
      outline: none;
      border: none;
      cursor: pointer;
      border-radius: 5px;
    }


    .navigationButtons{
      display: flex;
      gap: 1rem;

      .arrowButton{
        padding: .5rem;
        border-radius: 5px;
        outline: none;
        border: none;
        color: #f1f5f4;
        cursor: pointer;
        background-color: #8c52ff;

        svg{
          font-size: 1.2rem;
        }
      }
    }
  }

  @media (max-width: 500px){
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    .NavButtons{
      gap: 1rem;

      #Chapters{
        padding: .2rem;
        font-size: .65rem;
      }

      .options{
        padding: .3rem;
        font-size: .65rem;
      }

      .navigationButtons{
        gap: 1rem;

        .arrowButton{
          padding: .3rem;

          svg{
            font-size: .8rem;
          }
        }
      }
    }
  }
`

export const NavDownButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  .arrowDownButton{
    padding: .5rem;
    background-color: #8c52ff;
    outline: none;
    border: none;
    color: #f1f5f4;
    font-weight: bold;
    border-radius: 5px;
    display: flex;
    align-items: center;

    svg{
      font-size: 1rem;
    }
  }
`


//Modal

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(17, 17, 17, 0.8);
`

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .container{
    background: #f1f5f4;
    padding: 1rem;
    color: #111;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;


    .options{
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      .fontOptions{
        display: flex;
        align-items: center;
        gap: 1rem;

        #SelectFont{
          width: 5rem;
          background-color: #8c52ff;
          outline: none;
          color: #f1f5f4;
          border: none;
          border-radius: 5px;
          padding: .4rem;
          text-align: center;

          option{
            background-color: #3e1e68;
          }
        }
      }
      .fontSizeOptions{
        display: flex;
        align-items: center;
        gap: 1rem;

        #SelectFont{
          width: 3rem;
          background-color: #8c52ff;
          outline: none;
          color: #f1f5f4;
          border: none;
          border-radius: 5px;
          padding: .4rem;
          text-align: center;

          option{
            background-color: #3e1e68;
          }
        }
      }
    }
  }
`

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3{
    font-size: 1rem;
    position: relative;

    &::before {
      content: "";
      width: 4rem;
      height: 0.125rem;
      background: #8c52ff;
      position: absolute;
      bottom: 0;
    }
  }

  svg{
    font-size: 1.2rem;
    cursor: pointer;
  }
`