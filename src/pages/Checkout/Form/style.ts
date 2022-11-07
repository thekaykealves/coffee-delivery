import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const InputContainer = styled.div`
  width: 640px;
  height: 372px;
  padding: 40px;
  background-color: ${(props) => props.theme.colors['base-100']};
  border-radius: 6px;

  input {
    padding: 12px;
    border-radius: 4px;
    border: none;
    background-color: ${(props) => props.theme.colors['base-200']};
    color: ${(props) => props.theme.colors['base-900']};

    &::placeholder {
      font-size: 14px;
      color: ${(props) => props.theme.colors['base-300']};
    }
  }
`

export const MapInLineContainer = styled.div`
  display: flex;
  gap: 12px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;

  p {
    font-size: 14px;
    line-height: 18px;
  }
`

export const InputZipCode = styled.div`
  input {
    width: 200px;
  }
`

export const InputRoad = styled.div`
  input {
    width: 100%;
    margin-top: 16px;
  }
`

export const InputOptionalWrapper = styled.div`
  position: relative;

  &::after {
    content: attr(data-required);
    position: absolute;
    right: 12px;
    top: 50%;
    font-size: 15px;
    transform: translateY(-50%);
    font-style: italic;
    color: ${(props) => props.theme.colors['base-300']};
  }

  input {
    width: 100%;
  }
`

export const InputNumberAndComplement = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  margin-top: 16px;

  input#number {
    width: 200px;
  }
`

export const InputDistrictCityState = styled.div`
  display: grid;
  grid-template-columns: 200px auto 10%;
  gap: 12px;
  margin-top: 16px;

  input {
    font-size: 14px;
  }

  input#uf::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const SelectedCoffeesContainer = styled.div`
  /* position: absolute;
  top: 9.375rem;
  right: 6rem;

  @media (min-width: 1450px) {
    right: 20rem;
  } */
`

export const SelectedCoffeesTitle = styled.div`
  h2 {
    margin-bottom: 15px;
  }
`

export const CoffeesSelectedContainer = styled.div`
  width: 448px;
  padding: 40px;
  background-color: ${(props) => props.theme.colors['base-100']};
  border-radius: 6px 44px;
`

export const DivButtonConfirm = styled.div`
  button {
    width: 370px;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors['brand-yellow']};
    padding: 12px 0px;
    border: none;
    border-radius: 6px;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
      cursor: pointer;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`
