import { create } from 'zustand'

const useProductStore = create((set) => ({
  listProducts: [
  ],
  setListProduct: (data) => set(state => ({
    listProducts: [
      data,
      ...state.listProducts
    ]
  }))
}))

export default useProductStore;