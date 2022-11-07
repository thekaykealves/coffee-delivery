import styled from 'styled-components'

export const CheckoutTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  margin-top: 40px;

  h2 {
    margin-right: 240px;
  }
`

// no coffee selected
export const NoCoffeeSelectedDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1536px) {
    margin-top: 150px;
  }

  h1 {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors['brand-purple-dark']};
  }
`
