import { create } from 'zustand'

const useHomeStore = create((set) => ({
  count: 0,
  setCount: (result) => set({
    count: result
  })
}))

export default useHomeStore;