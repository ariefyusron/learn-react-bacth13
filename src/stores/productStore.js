import { create } from 'zustand'

const useProductStore = create((set) => ({
  listProducts: [
  ],
  setAddListProduct: (data) => set(state => ({
    listProducts: [
      data,
      ...state.listProducts
    ]
  })),
  setUpdateListProduct: (data) => set(state => {
    const getIndex = state.listProducts.findIndex(e => e.id === data.id)
    const result = [...state.listProducts]
    result[getIndex] = data
    return {
      listProducts: result
    }
  }) 
}))

export default useProductStore;