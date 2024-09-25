import { useNavigate } from 'react-router-dom'

const Index = () => {
  const navigate = useNavigate()

  return (
    <div>
      Ini halaman detail
      <button onClick={() => {
        navigate(-1)
      }}>back</button>
    </div>
  )
}

export default Index;