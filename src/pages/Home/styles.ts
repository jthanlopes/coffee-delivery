import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`

export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3.5rem;
  margin-top: 3rem;

  header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 4.125rem;

    h1 {
      font-size: 3rem;
      line-height: 130%;
    }

    p {
      font-size: 1.25rem;
      line-height: 130%;
    }
  }
`

export const IntroContainerItems = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;

  row-gap: 1.25rem;

  li {
    display: flex;
    align-items: center;
    gap: 1rem;

    color: ${(props) => props.theme['base-text']};
  }
`

interface IconContainerProps {
  itemColor: string;
}

export const IconContainer = styled.span<IconContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;

  background-color: ${(props) => props.itemColor};
  border-radius: 50%;

  svg {
    color: white;
  }
`

export const ProductsContainer = styled.section`
  margin-top: 6rem;
`;