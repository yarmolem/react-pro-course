import { createContext, ReactElement, useCallback, useState } from 'react'

interface Props {
  children: ReactElement | ReactElement[]
}

interface DropdownGroupContextProps {
  elementActive: string | null
  toggleElement: (id: string) => void
}

export const DropdownGroupContext = createContext(
  {} as DropdownGroupContextProps
)

const DropdownGroup = ({ children }: Props) => {
  const [elementActive, setElementActive] = useState<string | null>(null)

  const toggleElement = useCallback((id: string) => {
    setElementActive((prevId) => (prevId === id ? null : id))
  }, [])

  return (
    <DropdownGroupContext.Provider value={{ elementActive, toggleElement }}>
      {children}
    </DropdownGroupContext.Provider>
  )
}

export default DropdownGroup
