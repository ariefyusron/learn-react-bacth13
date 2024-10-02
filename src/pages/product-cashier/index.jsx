import { useState, useMemo, useCallback } from 'react'

import Header from '../../components/header'

const Index = () => {
  const [data, setData] = useState({
    name: '',
    umur: ''
  })
  const [count, setCount] = useState(0)
  const newData = useMemo(() => ({
    name: data.name,
    umur: data.umur
  }),[data.umur, data.name])

  const handleCount = useCallback(() => {
    setCount(count + 1)
  },[count])

  return (
    <div>
      <Header data={newData} />
      <div>Product Cashier: {count}</div>
      <button onClick={() => setData({ ...data, umur: 15 })}>ganti umur</button>
      <button onClick={() => setData({ ...data, name: "Saya budi" })}>ganti name</button>
      <button onClick={handleCount}>count</button>
      {console.log('render product cashier')}
    </div>
  )
};

export default Index;