import { ReactElement, useContext } from "react";
import { DropdownContext } from "./Dropdown";
import styles from "./dropdown.module.css";

interface DropdownContentProps {
  children?: string | ReactElement | ReactElement[];
}

const DropdownContent = ({ children }: DropdownContentProps) => {
  const { isOpen } = useContext(DropdownContext);

  return (
    <div
      className={[
        styles.dropdown_content,
        isOpen ? styles.content_open : styles.content_close,
      ].join(" ")}
    >
      <div>{children}</div>
    </div>
  );
};

export default DropdownContent;
