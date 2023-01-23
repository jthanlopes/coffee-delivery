import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  padding: 2rem 0;
  background-color: ${props => props.theme.background};

  z-index: 999;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 5.31rem;
    height: 2.5rem;
  }
`