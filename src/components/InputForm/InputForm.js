import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./InputForm.module.css";
import { useSelector } from "react-redux";
import { addContact } from "../../redux/actions/contatList";

const InputForm = () => {
  const contacts = useSelector((state) => state.contacts);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const changeHandler = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "number") {
      setNumber(e.target.value);
    }
  };

  const addContactToList = () => {
    const contactListNames = contacts.map((contact) =>
      contact.name.toLowerCase()
    );
    const newContactName = name.toLowerCase();
    if (contactListNames.includes(newContactName)) {
      toast.configure();
      toast.error(`${name} is already in your contact list`);
    } else {
      addContact({ id: uuidv4(), name: name, number: number });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addContactToList();

    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={submitHandler}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={changeHandler}
          className={styles.inputField}
        />
      </label>
      <label>
        Number:
        <input
          type="text"
          name="number"
          value={number}
          onChange={changeHandler}
          className={styles.inputField}
        />
      </label>
      <button
        type="submit"
        disabled={!name.length || !number.length}
        className={styles.btn}
      >
        Add contact
      </button>
    </form>
  );
};

InputForm.propTypes = {
  contactList: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    PropTypes.array,
  ]).isRequired,
  setContactList: PropTypes.func.isRequired,
};

export default InputForm;
