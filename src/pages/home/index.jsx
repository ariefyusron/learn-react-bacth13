import { useNavigate, Link } from 'react-router-dom'

import TextCount from '../../components/TextCount';
import useHomeStore from '../../stores/storeHome'

const Index = () => {
  const navigate = useNavigate()
  const { count, setCount } = useHomeStore((state) => state)

  return (
    <div>
      <p>Ini home</p>
      <button onClick={() => {
        navigate('/todolist')
      }}>
        Go to todolist
      </button>
      <Link to="/todolist">Go to todolist</Link>
      <button onClick={() => {
        navigate('detail')
      }}>
        go to Detail
      </button>

      <button onClick={() => {
        setCount(count + 1)
      }}>count</button>
      <TextCount />
    </div>
  )
};

export default Index;