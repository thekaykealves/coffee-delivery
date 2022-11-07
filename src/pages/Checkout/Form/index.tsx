import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { ConfirmOrder } from '../ConfirmOrder'
import {
  InputNumberAndComplement,
  InputOptionalWrapper,
  InputRoad,
  InputZipCode,
  InputDistrictCityState,
  FormContainer,
  SelectedCoffeesContainer,
  DivButtonConfirm,
  CoffeesSelectedContainer,
  InputContainer,
  MapInLineContainer,
  TextContainer,
  WrapperContainer,
} from './style'
import { MapPinLine } from 'phosphor-react'
import { Payment } from '../Payment'

const userFormValidationSchema = zod.object({
  cep: zod.string().min(8, 'Preencha com um CEP válido'),
  rua: zod.string(),
  numero: zod.number(),
  complemento: zod.string().optional(),
  bairro: zod.string(),
  cidade: zod.string(),
  uf: zod.string().min(2, 'Selecione a UF da sua cidade'),
})

type userFormData = zod.infer<typeof userFormValidationSchema>

export function Form() {
  const { register, handleSubmit, watch, setValue, setFocus } =
    useForm<userFormData>({
      resolver: zodResolver(userFormValidationSchema),
    })

  function fetchDataInApi(e: any) {
    const cep = e.target.value.replace(/\D/g, '')

    if (!e.target.value) {
      return
    }

    fetch(`https://viacep.com.br/ws/${cep}/json`)
      .then((response) => response.json())
      .then((data) => {
        setValue('rua', data.logradouro)
        setValue('bairro', data.bairro)
        setValue('cidade', data.localidade)
        setValue('uf', data.uf)
        setFocus('numero', data.numero)
      })
      .catch((err) => console.log(err))
  }

  function handleAddInputs(data: userFormData, e: any) {
    e.preventDefault()
    localStorage.setItem('datas', JSON.stringify(data))
  }

  function redirectUser() {
    const formOfPayment = localStorage.getItem('formOfPaymentSelected')
    if (formOfPayment === '') {
      alert('Selecione uma forma de pagamento')
    }

    return (window.location.href = '/success')
  }

  const inputCep = watch('cep')

  return (
    <form onSubmit={handleSubmit(handleAddInputs)}>
      <FormContainer>
        <WrapperContainer>
          <InputContainer>
            <MapInLineContainer>
              <MapPinLine size={22} color="#C47F17" />
              <TextContainer>
                Endereço de Entrega
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </TextContainer>
            </MapInLineContainer>

            <InputZipCode>
              <input
                required
                type="number"
                placeholder="CEP sem o hífen (-)"
                {...register('cep')}
                onBlur={fetchDataInApi}
              />
            </InputZipCode>
            <InputRoad>
              <input
                type="text"
                required
                placeholder="Rua"
                {...register('rua')}
              />
            </InputRoad>
            <InputNumberAndComplement>
              <input
                id="number"
                type="number"
                placeholder="Número"
                {...register('numero', { valueAsNumber: true })}
              />
              <InputOptionalWrapper data-required="opcional">
                <input
                  type="text"
                  placeholder="Complemento"
                  {...register('complemento')}
                />
              </InputOptionalWrapper>
            </InputNumberAndComplement>
            <InputDistrictCityState>
              <input type="text" placeholder="Bairro" {...register('bairro')} />
              <input type="text" placeholder="Cidade" {...register('cidade')} />
              <input
                id="uf"
                list="list-uf"
                placeholder="UF"
                {...register('uf')}
              />

              <datalist id="list-uf">
                <option value="AC"></option>
                <option value="AL"></option>
                <option value="AM"></option>
                <option value="AP"></option>
                <option value="BA"></option>
                <option value="CE"></option>
                <option value="DF"></option>
                <option value="ES"></option>
                <option value="GO"></option>
                <option value="MA"></option>
                <option value="MG"></option>
                <option value="MS"></option>
                <option value="MT"></option>
                <option value="PA"></option>
                <option value="PB"></option>
                <option value="PE"></option>
                <option value="PI"></option>
                <option value="PR"></option>
                <option value="RJ"></option>
                <option value="RN"></option>
                <option value="RO"></option>
                <option value="RR"></option>
                <option value="RS"></option>
                <option value="SC"></option>
                <option value="SE"></option>
                <option value="SP"></option>
                <option value="TO"></option>
              </datalist>
            </InputDistrictCityState>
          </InputContainer>

          <Payment />
        </WrapperContainer>

        <SelectedCoffeesContainer>
          <CoffeesSelectedContainer>
            <ConfirmOrder />
            <DivButtonConfirm>
              <button type="submit" onClick={redirectUser} disabled={!inputCep}>
                Confirmar pedido
              </button>
            </DivButtonConfirm>
          </CoffeesSelectedContainer>
        </SelectedCoffeesContainer>
      </FormContainer>
    </form>
  )
}
