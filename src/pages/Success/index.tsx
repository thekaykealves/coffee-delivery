import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
// import { useEffect } from 'react'
import { ImageComponent } from './Image'

import {
  DivInfos,
  DivInfosAddressMap,
  DivInfosContainer,
  DivInfosDollar,
  DivInfosTimer,
  DivSuccessContainer,
  DivConfirmedOrder,
  DivInfosText,
  DivBorderGradient,
} from './style'

export function Success() {
  let formOfPaymentSelected = localStorage.getItem('formOfPaymentSelected')
  const dataInJSON = localStorage.getItem('datas')
  const data = JSON.parse(dataInJSON!)

  switch (formOfPaymentSelected) {
    case 'credit':
      formOfPaymentSelected = 'Cartão de Crédito'
      break

    case 'debit':
      formOfPaymentSelected = 'Cartão de Débito'
      break

    case 'money':
      formOfPaymentSelected = 'Dinheiro'
      break
  }

  return (
    <>
      <DivConfirmedOrder>
        <h2>Uhu! Pedido Confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </DivConfirmedOrder>

      <DivSuccessContainer>
        <DivBorderGradient>
          <DivInfosContainer>
            <DivInfos>
              <DivInfosAddressMap>
                <MapPin size={16} color="white" weight="fill" />
              </DivInfosAddressMap>
              <DivInfosText>
                <span>
                  Entrega em{' '}
                  <strong>
                    {data.rua}, {data.numero}
                  </strong>
                </span>
                <span>
                  {data.bairro} - {data.cidade}, {data.uf}
                </span>
              </DivInfosText>
            </DivInfos>

            <DivInfos>
              <DivInfosTimer>
                <Timer size={16} color="white" weight="fill" />
              </DivInfosTimer>
              <DivInfosText>
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min</strong>
              </DivInfosText>
            </DivInfos>

            <DivInfos>
              <DivInfosDollar>
                <CurrencyDollar size={16} color="white" />
              </DivInfosDollar>
              <DivInfosText>
                <span>Pagamento na entrega</span>
                <strong>{formOfPaymentSelected}</strong>
              </DivInfosText>
            </DivInfos>
          </DivInfosContainer>
        </DivBorderGradient>

        <ImageComponent />
      </DivSuccessContainer>
    </>
  )
}
