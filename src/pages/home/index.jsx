import { useNavigate, Link } from 'react-router-dom'

const Index = () => {
  const navigate = useNavigate()

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
    </div>
  )
};

export default Index;