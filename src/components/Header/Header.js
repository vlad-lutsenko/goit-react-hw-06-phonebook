import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Header.module.css";
import slideIn from "../../utils/transitions/slide.module.css";

const Header = () => {
  const [appear, setAppear] = useState(false);

  useEffect(() => {
    setAppear(true);
  }, []);

  return (
    <header className={styles.headerBlock}>
      <CSSTransition
        in={appear}
        classNames={slideIn}
        timeout={500}
        mountOnEnter
      >
        <h1 className={styles.header}>Phonebook</h1>
      </CSSTransition>
    </header>
  );
};

export default Header;
