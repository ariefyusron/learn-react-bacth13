import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import Button from '../../components/Button'
import './styles.css'

const App = () => {
  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  const getData = () => {
    setIsLoading(true)
    axios
      .get('https://jsonplaceholder.typicode.com/todos/')
      .then((res) => {
        console.log('success', res.data)
        setList(res.data)
        setIsLoading(false)
      }).catch(() => {
        setIsError(true)
      })
  }

  useEffect(() => {
    getData()
  },[])

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

      {isError ? (
        <div>Error</div>
      ) : (
        <>
          {isLoading ? (
          <div>
            <div>Loading</div>
          </div>
        ) : (
          <div className='wrap-content'>
            {list.length === 0 ? <p>Kosong</p> : (
              <ul>
                {list.map((item, index) => {
                  return (
                    <li key={index} style={{ marginBottom: '12px' }}>
                      {item.title}
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
        )}
        </>
      )}
    </div>
  )
};

export default App;