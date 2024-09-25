import { useNavigate } from 'react-router-dom'
import useHomeStore from '../../stores/storeHome'

const Index = () => {
  const navigate = useNavigate()
  const count = useHomeStore(state => state.count)

  return (
    <div>
      Ini halaman detail
      <button onClick={() => {
        navigate(-1)
      }}>back</button>
      <p>count: {count}</p>
    </div>
  )
}

export default Index;