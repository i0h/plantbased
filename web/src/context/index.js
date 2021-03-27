import { createContext } from "react"

const Context = createContext({
  isIntroDone: false,
  setIsIntroDone: () => {},
  darkMode: false,
  setDarkMode: () => {},
})

export default Context
