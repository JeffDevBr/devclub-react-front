import Burger from '../../assets/img/burger.svg'
import { Button, Container, FormGroup, Image, Input, InputLabel, Title } from './styles'

function Home() {


  return (
    <Container>
      <Image src={Burger} alt='Imagem Burger' />
      <Title>Faça seu pedido!</Title>

      <FormGroup>
        <InputLabel>Pedido</InputLabel>
        <Input type='text' placeholder='1 Coca-Cola, 1-X Salada'></Input>

        <InputLabel>Nome do Cliente</InputLabel>
        <Input type='text' placeholder='Steve Jobs'></Input>
      </FormGroup>

      <Button>Novo Pedido</Button>
    </Container>
  )
}

export default Home
