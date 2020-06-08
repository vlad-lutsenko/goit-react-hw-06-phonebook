import React, { useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import popIn from "../../utils/transitions/pop.module.css";
import slideIn from "../../utils/transitions/slide.module.css";
import styles from "./ContactList.module.css";

import { useSelector, useDispatch } from "react-redux";
import {
  deleteContact,
  setContactList,
} from "../../redux/withToolkit/actions/contactList";
import { get, save } from "../../utils/storage";

const ContactList = () => {
  const dispatch = useDispatch();
  const contactList = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);

  const onDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const filteredList = contactList.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
      contact.number.includes(filter.trim())
  );

  useEffect(() => {
    dispatch(setContactList(get("contacts")));
  }, [dispatch]);

  useEffect(() => {
    save("contacts", contactList);
  }, [contactList]);

  return (
    <>
      <CSSTransition
        in={!contactList.length}
        timeout={250}
        classNames={slideIn}
        mountOnEnter
        unmountOnExit
      >
        <p>Phonebook is empty</p>
      </CSSTransition>

      <TransitionGroup component="ul" className={styles.contactList}>
        {filteredList.map((contact) => (
          <CSSTransition key={contact.id} classNames={popIn} timeout={250}>
            <li className={styles.contactListItem}>
              <span className={styles.name}>{contact.name}</span>
              <span className={styles.number}>{contact.number}</span>
              <button type="button" onClick={() => onDelete(contact.id)}>
                &#215;
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

export default ContactList;
