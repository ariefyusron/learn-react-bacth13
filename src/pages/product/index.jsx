import { useState } from 'react'
import { Table, Button } from 'antd'

import useProductStore from '../../stores/productStore';
import Form from './components/form'

const Index = () => {
  const listProducts = useProductStore(state => state.listProducts)
  const [isOpen, setIsOpen] = useState(false)
  const [typeForm, setTypeForm] = useState('')
  const [idProduct, setIdProduct] = useState('')

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
    },
    {
      title: 'action',
      dataIndex: 'id',
      render: (res) => (
        <Button
          onClick={() => {
            setTypeForm('edit')
            setIdProduct(res)
            setIsOpen(true)
          }}
        >
          Edit
        </Button>
      )
    }
  ]

  return (
    <>
      <Button
        style={{ marginBottom: '12px' }}
        type='primary'
        onClick={() => {
          setTypeForm('add')
          setIsOpen(true)
        }}
      >Tambah</Button>
      <Table columns={columns} dataSource={listProducts} />
      <Form
        open={isOpen}
        typeForm={typeForm}
        idProduct={idProduct}
        onCancel={() => {
          setIsOpen(false)
          setTypeForm('')
          setIdProduct('')
        }}
      />
    </>
  )
};

export default Index;