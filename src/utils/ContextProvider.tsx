import {
  createContext,
  useState,
  type ReactNode,
} from 'react'
import type { contextType, modeType } from '../types/context.type'

export const modeContext = createContext<contextType | null>(null)

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<modeType>('dark')

  return (
    <modeContext.Provider value={{ mode, setMode }}>
      {children}
    </modeContext.Provider>
  )
}

export default ContextProvider
