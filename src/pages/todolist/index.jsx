import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'
import './styles.css'

const App = () => {
  const [list, setList] = useState([])
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => {
        navigate(-1)
      }}>back</button>
      <input
      value={input}
      onChange={res => {
        setInput(res.target.value)
      }} />
      <button onClick={() => {
        setList([...list, input])
        setInput('')
      }}>Tambah</button>

      <Button
        onClick={() => {
          setList([])
        }}
      >
        Hapus Semua
      </Button>

      <div className='wrap-content'>
        {list.length === 0 ? <p>Kosong</p> : (
          <ul>
            {list.map((item, index) => {
              return (
                <li key={index} style={{ marginBottom: '12px' }}>
                  {item}
                  <Button
                    style={{ marginLeft: '12px'}}
                    onClick={() => {
                      setList(list.filter((e, i) => i !== index ))
                    }}
                  >
                    hapus
                  </Button>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
};

export default App;