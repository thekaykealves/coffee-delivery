import { FormOfPayment, FormOfPaymentWrapper, PaymentContainer } from './style'

import { CurrencyDollar, CreditCard, Bank } from 'phosphor-react'
import { useState } from 'react'

export function Payment() {
  const [paymentMode, setPaymentMode] = useState('')

  function handleChoosePaymentMode(_paymentMode: string) {
    setPaymentMode(_paymentMode)
    localStorage.setItem('formOfPaymentSelected', _paymentMode)
  }

  return (
    <PaymentContainer>
      <p>
        <CurrencyDollar size={22} color="#8047F8" />
        Pagamento
      </p>
      <span>
        O pagamento é feito na entrega. Escolha a forma que deseja pagar
      </span>
      <FormOfPaymentWrapper>
        <FormOfPayment
          selectedColor={paymentMode === 'credit' ? 'selected' : 'default'}
          selectedBorder={paymentMode === 'credit' ? 'borderColor' : 'noBorder'}
          onClick={() => handleChoosePaymentMode('credit')}
        >
          <CreditCard size={16} color="#8047F8" />
          cartão de crédito
        </FormOfPayment>

        <FormOfPayment
          selectedColor={paymentMode === 'debit' ? 'selected' : 'default'}
          selectedBorder={paymentMode === 'debit' ? 'borderColor' : 'noBorder'}
          onClick={() => handleChoosePaymentMode('debit')}
        >
          <Bank size={16} color="#8047F8" />
          cartão de débito
        </FormOfPayment>

        <FormOfPayment
          selectedColor={paymentMode === 'money' ? 'selected' : 'default'}
          selectedBorder={paymentMode === 'money' ? 'borderColor' : 'noBorder'}
          onClick={() => handleChoosePaymentMode('money')}
        >
          <CurrencyDollar size={16} color="#8047F8" />
          dinheiro
        </FormOfPayment>
      </FormOfPaymentWrapper>
    </PaymentContainer>
  )
}
