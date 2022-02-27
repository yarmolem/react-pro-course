import {
  useRef,
  useState,
  useEffect,
  useContext,
  useCallback,
  ReactElement,
  createContext
} from 'react'

import { nanoid } from 'nanoid'
import { DropdownGroupContext } from './DropdownGroup'

import styles from './dropdown.module.css'

interface DropdownContextProps {
  isOpen: boolean
  handleToggle: () => void
}

interface Props {
  children: ReactElement | ReactElement[]
}

export const DropdownContext = createContext({} as DropdownContextProps)

const Dropdown = ({ children }: Props) => {
  const idRef = useRef<string | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const groupContext = useContext(DropdownGroupContext)

  const id = idRef.current
  const hasGroup = Object.keys(groupContext).length !== 0

  const handleToggle = useCallback(() => {
    if (hasGroup) {
      groupContext?.toggleElement(id!)
    } else {
      setIsOpen((v) => !v)
    }
  }, [id])

  useEffect(() => {
    if (hasGroup) {
      const idGen = nanoid()
      idRef.current = idGen
    }
  }, [])

  return (
    <DropdownContext.Provider
      value={{
        isOpen: hasGroup ? groupContext.elementActive === id : isOpen,
        handleToggle
      }}
    >
      <div className={styles.dropdown}>{children}</div>
    </DropdownContext.Provider>
  )
}

export default Dropdown
