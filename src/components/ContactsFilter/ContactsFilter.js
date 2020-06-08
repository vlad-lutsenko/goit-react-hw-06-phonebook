import React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./ContactsFilter.module.css";
import slideIn from "../../utils/transitions/slide.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/actions/filter";

const ContactsFilter = () => {
  const contactList = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <>
      <CSSTransition
        in={contactList.length > 1}
        classNames={slideIn}
        timeout={250}
        mountOnEnter
        unmountOnExit
      >
        <input
          type="text"
          onChange={inputChangeHandler}
          className={styles.input}
          placeholder="Enter needed name or number"
        />
      </CSSTransition>
    </>
  );
};

export default ContactsFilter;
