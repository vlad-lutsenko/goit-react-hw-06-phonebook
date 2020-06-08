import React from "react";
import Header from "./components/Header/Header";
import InputForm from "./components/InputForm/InputForm";
import ContactList from "./components/ContactList/ContactList";
import ContactsFilter from "./components/ContactsFilter/ContactsFilter";

function App() {
  return (
    <>
      <Header />
      <InputForm />
      <ContactsFilter />
      <ContactList />
    </>
  );
}

export default App;
