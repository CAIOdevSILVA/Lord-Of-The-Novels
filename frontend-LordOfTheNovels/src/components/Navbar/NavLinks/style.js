import styled from "styled-components";

export const ListContainer = styled.ul`
  list-style: none;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  

  .link {
    text-decoration: none;
  }
  @media (max-width: 1345px){
    justify-content: stretch;
    flex-wrap: wrap;
    gap: 1;
  }

  @media (max-width: 1024px) {
    display: none;
  }

`;

export const ListItem = styled.li`
  font-size: 1.25rem;
  display: flex;
  align-items: flex-end;
  
  gap: 0.5rem;
  padding: 0.5rem;
  color: ${(props) => (props.active ? "#8c52ff" : props.theme.colors.tertiary)};

  svg {
    font-size: 2rem;
  }
`;
