import { useContext, createContext } from 'react'

const storeContext = createContext()
export const StoreProvider = storeContext.Provider

const useStore = () => {
  return useContext(storeContext)
}

export default useStore
