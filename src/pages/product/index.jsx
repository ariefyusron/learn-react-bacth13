import { useState } from 'react'
import { Table, Button } from 'antd'

import useProductStore from '../../stores/productStore';
import Form from './components/form'

const Index = () => {
  const listProducts = useProductStore(state => state.listProducts)
  const [isOpen, setIsOpen] = useState(false)

  const columns = [
    {
      title: 'Nama',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Harga',
      dataIndex: 'price',
      key: 'price'
    }
  ]

  return (
    <>
      <Button
        style={{ marginBottom: '12px' }}
        type='primary'
        onClick={() => setIsOpen(true)}
      >Tambah</Button>
      <Table columns={columns} dataSource={listProducts} />
      <Form
        open={isOpen}
        onCancel={() => setIsOpen(false)}
      />
    </>
  )
};

export default Index;