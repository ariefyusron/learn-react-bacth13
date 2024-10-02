import { useState, useMemo } from 'react'

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

  return (
    <div>
      <Header data={newData} />
      <div>Product Cashier: {data.umur}</div>
      <button onClick={() => setData({ ...data, umur: 15 })}>ganti umur</button>
      <button onClick={() => setData({ ...data, name: "Saya budi" })}>ganti name</button>
      <button onClick={() => setCount(count + 1)}>count</button>
      {console.log('render product cashier')}
    </div>
  )
};

export default Index;