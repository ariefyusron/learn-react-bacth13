import { useState } from 'react'
import { Modal, Input } from 'antd'
import { v4 } from 'uuid'

import useProductStore from '../../../../stores/productStore'

const initForm = {
  name: '',
  price: ''
}

const Index = (props) =>{
  const [form, setForm] = useState(initForm)
  const setListProduct = useProductStore(state => state.setListProduct)

  const setFormBody = (key, value) => {
    setForm({
      ...form,
      [key]: value
    })
  }

  return (
    <Modal
      title="Tambah Produk"
      {...props}
      onOk={() => {
        setListProduct({
            id: v4(),
            ...form
          })
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