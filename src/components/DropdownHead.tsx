import { useContext } from "react";
import { DropdownContext } from "./Dropdown";

import styles from "./dropdown.module.css";

const DropdownHead = () => {
  const { isOpen, handleToggle } = useContext(DropdownContext);

  return (
    <div className={styles.dropdown_head}>
      <span>{isOpen ? "OPEN" : "CLOSE"}</span>
      <button onClick={handleToggle}>TOGGLE</button>
    </div>
  );
};

export default DropdownHead;
