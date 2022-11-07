import styled from 'styled-components'

export const PaymentContainer = styled.div`
  width: 640px;
  padding: 40px;
  background-color: ${(props) => props.theme.colors['base-100']};
  border-radius: 6px;

  p {
    display: flex;
    gap: 8px;
    line-height: 20.8px;
    margin-bottom: 2px;
  }

  span {
    margin-left: 30px;
    color: ${(props) => props.theme.colors['base-700']};
  }
`

export const FormOfPaymentWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 32px;
`

const COLORS = {
  default: 'base-300',
  selected: 'brand-purple-light',
  borderColor: 'brand-purple',
  noBorder: 'transparent',
} as const

interface FormOfPaymentProps {
  selectedColor: keyof typeof COLORS
  selectedBorder: 'borderColor' | 'noBorder'
}

export const FormOfPayment = styled.div<FormOfPaymentProps>`
  width: 180px;
  height: 50px;
  padding: 16px;
  font-size: 12px;
  text-transform: uppercase;
  line-height: 19.2px;
  color: ${(props) => props.theme.colors['base-700']};
  border: 1px solid
    ${(props) => props.theme.colors[COLORS[props.selectedBorder]]};
  background: ${(props) => props.theme.colors[COLORS[props.selectedColor]]};
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  gap: 12px;
`
