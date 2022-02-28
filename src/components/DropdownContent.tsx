import { CSSProperties, ReactElement, useContext } from 'react'
import { DropdownContext } from './Dropdown'
import styles from './dropdown.module.css'

interface DropdownContentProps {
  className?: string
  style?: CSSProperties
  children?: string | ReactElement | ReactElement[]
}

const DropdownContent = ({
  style,
  children,
  className
}: DropdownContentProps) => {
  const { isOpen } = useContext(DropdownContext)

  return (
    <div
      style={style}
      className={[
        styles.dropdown_content,
        isOpen ? styles.content_open : styles.content_close,
        className
      ].join(' ')}
    >
      {children}
    </div>
  )
}

export default DropdownContent
