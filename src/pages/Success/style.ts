import styled from 'styled-components'

export const DivConfirmedOrder = styled.div`
  margin-top: 188px;

  h2 {
    margin-top: 80px;
    margin-bottom: 4px;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    line-height: 40px;
    font-size: 32px;
    color: ${(props) => props.theme.colors['brand-yellow-dark']};
  }

  p {
    font-size: 20px;
    line-height: 26px;
    color: ${(props) => props.theme.colors['base-800']};
  }
`

export const DivSuccessContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
`

export const DivBorderGradient = styled.div`
  padding: 1px;
  margin-top: 40px;
  border-radius: 6px 36px;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors['brand-yellow']},
    ${(props) => props.theme.colors['brand-purple']}
  );
`

export const DivInfosContainer = styled.div`
  background-color: ${(props) => props.theme.colors['base-50']};
  padding: 40px;
  width: 536px;
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors['base-700']};
  gap: 32px;
  position: relative;
`

export const DivInfos = styled.div`
  width: 354px;
  display: flex;
`

export const DivInfosText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 20px;
`

export const DivInfosAddressMap = styled.div`
  margin-right: 12px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: circle();
  background-color: ${(props) => props.theme.colors['brand-purple']};
`

export const DivInfosTimer = styled(DivInfosAddressMap)`
  background-color: ${(props) => props.theme.colors['brand-yellow']};
`

export const DivInfosDollar = styled(DivInfosAddressMap)`
  background-color: ${(props) => props.theme.colors['brand-yellow-dark']};
`
