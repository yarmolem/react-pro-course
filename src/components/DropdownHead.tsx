import { CSSProperties, useContext } from 'react'
import { DropdownContext } from './Dropdown'

import styles from './dropdown.module.css'

interface Props {
  className?: string
  style?: CSSProperties
}

const DropdownHead = ({ className, style }: Props) => {
  const { isOpen, handleToggle } = useContext(DropdownContext)

  return (
    <div style={style} className={[styles.dropdown_head, className].join(' ')}>
      <span>{isOpen ? 'OPEN' : 'CLOSE'}</span>
      <button onClick={handleToggle}>TOGGLE</button>
    </div>
  )
}

export default DropdownHead
