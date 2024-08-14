import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
import Burger from '../../assets/img/burger.svg'
import { Button, Container, FormGroup, Image, Input, InputLabel, Title } from './styles'


function Home() {
  const navigate = useNavigate()

  const inputOrder = useRef()
  const inputClient = useRef()

  const registerNewOrder = async () => {
    const order = inputOrder.current.value
    const client = inputClient.current.value

    await api.post('/order', { order, client })
    
    navigate('/lista-de-pedidos')

  }


  return (
    <Container>
      <Image src={Burger} alt='Imagem Burger' />
      <Title>Faça seu pedido!</Title>

      <FormGroup>
        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} type='text' placeholder='1 Coca-Cola, 1-X Salada'></Input>

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputClient} type='text' placeholder='Steve Jobs'></Input>
      </FormGroup>

      <Button onClick={registerNewOrder}>Novo Pedido</Button>
    </Container>
  )
}

export default Home
