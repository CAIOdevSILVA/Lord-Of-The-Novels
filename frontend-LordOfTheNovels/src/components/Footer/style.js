import styled from "styled-components";

export const Container = styled.div`
  padding: 1.0625rem 1.5625rem;
  display: flex;
  flex-direction: column;
  margin-top: 1.25rem;
  border-top: 2px solid #8c52ff;
  gap: 1rem;

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: flex-start;
    padding: 1rem 0;
    gap: 2rem;

    .socialLinks {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      .logo {
        width: 8rem;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .socialMedia {
        display: flex;
        list-style: none;
        justify-content: center;
        gap: 1rem;

        li {
          .link {
            text-decoration: none;
            color: #f1f5f4;
            transition: all 0.5s;

            &:hover {
              color: #8c52ff;
            }
          }
        }
      }
    }

    .resource {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 1rem;

      h2 {
        font-size: 2rem;
      }

      .resourceContent {
        display: flex;
        flex-direction: column;
        list-style: none;
        gap: .5rem;
        padding: 0 1rem;

        li {
          .link {
            text-decoration: none;
            color: #f1f5f4;
            transition: .5s;

            &:hover{
              color: #8c52ff;
            }
          }
        }
      }
    }
    
    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      

      .socialLinks{
        .logo{
          width: 12rem;
        }
      }

      .resource{
        .resourceContent{
          gap: 1rem;
        }
      }
    }
  }

  .info {
    text-align: center;
    font-size: 0.8rem;

    p{
      margin-top: .8rem;
    }
  }
`;
