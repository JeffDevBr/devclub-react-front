
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
import Burger from '../../assets/img/burger1.svg'
import Trash from '../../assets/img/trash.svg'
import { Container, Image, Title, Button, List } from './styles'

const ListOrder = () => {
  const [order, setOrder] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUsers = async () => {
      const { data: newOrder } = await api.get('/order')
      setOrder(newOrder)
    }

    fetchUsers()
  }, [])

  const deleteUser = async (id) => {
    await api.delete(`/order/${id}`)
    const newOrder = order.filter(user => user.id !== id)
    setOrder(newOrder)
  }

  return (
    <Container>
      <Image src={Burger} alt='Imagem Burger'></Image>
      <Title>Pedidos</Title>
      <ul>
        {
          order.map(li => (
            <List key={li.id}>
              <p>{li.order}</p>
              <p>{li.client}</p>
              <button  onClick={() => deleteUser(li.id)}><img src={Trash} alt="icon trash" /></button>
            </List>
          ))
        }
      </ul>

      <Button onClick={() => navigate('/')} >Voltar</Button>
    </Container>
  )
}

export default ListOrder
