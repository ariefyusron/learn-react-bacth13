import { useEffect, useState } from 'react'
import { Modal, Input } from 'antd'
import { v4 } from 'uuid'

import useProductStore from '../../../../stores/productStore'

const initForm = {
  name: '',
  price: ''
}

const Index = ({ typeForm, idProduct, ...props}) =>{
  const isAdd = typeForm === 'add'
  const [form, setForm] = useState(initForm)
  const { setAddListProduct, listProducts, setUpdateListProduct } = useProductStore(state => state)

  useEffect(() => {
    if(props.open && !isAdd) {
      const getIndex = listProducts.findIndex(e => e.id === idProduct)
      setForm({
        name: listProducts[getIndex].name,
        price: listProducts[getIndex].price
      })
    }
  },[props.open])

  const setFormBody = (key, value) => {
    setForm({
      ...form,
      [key]: value
    })
  }

  return (
    <Modal
      title={`${isAdd ? 'Tambah' : 'Edit'} Produk`}
      {...props}
      onCancel={() => {
        setForm(initForm)
        props.onCancel()
      }}
      onOk={() => {
        if(isAdd) {
          setAddListProduct({
            id: v4(),
            ...form
          })
        } else {
          setUpdateListProduct({
            id: idProduct,
            ...form
          })
        }
        setForm(initForm)
        props.onCancel()
      }}>
      <Input
        style={{ marginBottom: '12px' }}
        placeholder='Nama'
        value={form.name}
        onChange={e => {
          setFormBody('name', e.target.value)
        }}
      />
      <Input
        placeholder='Harga'
        value={form.price}
        onChange={e => {
          setFormBody('price', Number(e.target.value))
        }}
      />
    </Modal>
  )
}

export default Index;