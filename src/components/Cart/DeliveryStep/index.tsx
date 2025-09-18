import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Button } from '../../../styles'
import { FlexInput, InputGroup } from '../styles'
import { CheckoutCart } from './styles'
import InputMask from 'react-input-mask'

declare type DeliveryStepProps = {
  onNext: (values: DeliveryValues) => void
  onBack: () => void
}

const DeliveryStep = ({ onNext, onBack }: DeliveryStepProps) => {
  function checkInputHasError(fieldname: string) {
    const isTouched = fieldname in form.touched
    const isInvalid = fieldname in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const form = useFormik<DeliveryValues>({
    initialValues: {
      name: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'Este campo precisa ter no mínimo 5 caracteres')
        .required('Este campo é obrigatório'),
      address: Yup.string()
        .min(5, 'Este campo precisa ter no mínimo 5 caracteres')
        .required('Este campo é obrigatório'),
      city: Yup.string()
        .min(5, 'Este campo precisa ter no mínimo 5 caracteres')
        .required('Este campo é obrigatório'),
      cep: Yup.string()
        .min(9, 'Este campo precisa ter 9 caracteres')
        .max(9, 'Este campo precisa ter 9 caracteres')
        .required('Este campo é obrigatório'),
      number: Yup.string().required('Este campo é obrigatório'),
      complement: Yup.string()
        .min(5, 'Este campo precisa ter no mínimo 5 caracteres')
        .required('Este campo é obrigatório')
    }),
    onSubmit: (values) => {
      onNext(values)
    }
  })

  return (
    <CheckoutCart>
      <h3>Entrega</h3>
      <form onSubmit={form.handleSubmit} id="DeliveryForm">
        <InputGroup>
          <label htmlFor="name">Quem irá receber</label>
          <input
            value={form.values.name}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputHasError('name') ? 'error' : ''}
            type="text"
            id="name"
            name="name"
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="address">Endereço</label>
          <input
            value={form.values.address}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputHasError('address') ? 'error' : ''}
            type="text"
            id="address"
            name="address"
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="city">Cidade</label>
          <input
            value={form.values.city}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputHasError('city') ? 'error' : ''}
            type="text"
            id="city"
            name="city"
          />
        </InputGroup>
        <FlexInput>
          <InputGroup>
            <label htmlFor="cep">CEP</label>
            <InputMask
              value={form.values.cep}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('cep') ? 'error' : ''}
              type="text"
              id="cep"
              name="cep"
              mask="99999-999"
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="number">Número</label>
            <input
              value={form.values.number}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('number') ? 'error' : ''}
              type="text"
              id="number"
              name="number"
            />
          </InputGroup>
        </FlexInput>
        <InputGroup>
          <label htmlFor="complement">Complemento (opcional)</label>
          <input
            value={form.values.complement}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputHasError('complement') ? 'error' : ''}
            type="text"
            id="complement"
            name="complement"
          />
        </InputGroup>
      </form>
      <Button type="submit" form="DeliveryForm">
        Continuar para o pagamento
      </Button>
      <Button type="button" onClick={onBack}>
        Voltar para o carrinho
      </Button>
    </CheckoutCart>
  )
}

export default DeliveryStep
