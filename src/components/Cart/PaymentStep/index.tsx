import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Button } from '../../../styles'
import { formatPrice } from '../../../utils'
import { FlexInput, InputGroup } from '../styles'
import { PaymentContainer } from './styles'
import InputMask from 'react-input-mask'

type PaymentStepProps = {
  items: ItemCardapio[]
  getTotalPrice: (items: ItemCardapio[]) => number
  onBack: () => void
  finalizePurchase: (values: PaymentValues) => void
}

const PaymentStep = ({
  items,
  getTotalPrice,
  onBack,
  finalizePurchase
}: PaymentStepProps) => {
  function checkInputHasError(fieldname: string) {
    const isTouched = fieldname in form.touched
    const isInvalid = fieldname in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const form = useFormik<PaymentValues>({
    initialValues: {
      cardDisplayName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      cardDisplayName: Yup.string()
        .min(5, 'Este campo precisa ter no mínimo 5 caracteres')
        .required('Este campo é obrigatório'),
      cardNumber: Yup.string()
        .min(5, 'Este campo precisa ter no mínimo 5 caracteres')
        .required('Este campo é obrigatório'),
      cardCode: Yup.string()
        .min(3, 'Este campo precisa ter 3 caracteres')
        .max(3, 'Este campo precisa ter 3 caracteres')
        .required('Este campo é obrigatório'),
      expiresMonth: Yup.string()
        .min(2, 'Este campo precisa ter 2 caracteres')
        .max(2, 'Este campo precisa ter 2 caracteres')
        .required('Este campo é obrigatório'),
      expiresYear: Yup.string()
        .min(2, 'Este campo precisa ter 2 caracteres')
        .max(2, 'Este campo precisa ter 2 caracteres')
        .required('Este campo é obrigatório')
    }),
    onSubmit: (values) => {
      finalizePurchase(values)
    }
  })

  return (
    <PaymentContainer>
      <h4>Pagamento - Valor a pagar {formatPrice(getTotalPrice(items))}</h4>
      <form onSubmit={form.handleSubmit} id="PaymentForm">
        <InputGroup>
          <label htmlFor="cardDisplayName">Nome no cartão</label>
          <input
            value={form.values.cardDisplayName}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputHasError('cardDisplayName') ? 'error' : ''}
            type="text"
            id="cardDisplayName"
            name="cardDisplayName"
          />
        </InputGroup>
        <FlexInput>
          <InputGroup>
            <label htmlFor="cardNumber">Número do cartão</label>
            <InputMask
              value={form.values.cardNumber}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('cardNumber') ? 'error' : ''}
              type="text"
              id="cardNumber"
              name="cardNumber"
              mask="9999 9999 9999 9999"
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="cardCode">CVV</label>
            <InputMask
              value={form.values.cardCode}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('cardCode') ? 'error' : ''}
              type="text"
              id="cardCode"
              name="cardCode"
              mask="999"
            />
          </InputGroup>
        </FlexInput>
        <FlexInput>
          <InputGroup>
            <label htmlFor="expiresMonth">Mês de vencimento</label>
            <InputMask
              value={form.values.expiresMonth}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('expiresMonth') ? 'error' : ''}
              type="text"
              id="expiresMonth"
              name="expiresMonth"
              mask="99"
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="expiresYear">Ano de vencimento</label>
            <InputMask
              value={form.values.expiresYear}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('expiresYear') ? 'error' : ''}
              type="text"
              id="expiresYear"
              name="expiresYear"
              mask="99"
            />
          </InputGroup>
        </FlexInput>
      </form>
      <Button type="submit" form="PaymentForm">
        Finalizar pagamento
      </Button>
      <Button type="button" onClick={onBack}>
        Voltar para a edição de endereço
      </Button>
    </PaymentContainer>
  )
}

export default PaymentStep
