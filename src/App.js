import React from "react";
import Storage from "./utils/renderProps/Storage";
import Header from "./components/Header/Header";
import InputForm from "./components/InputForm/InputForm";
import ContactList from "./components/ContactList/ContactList";
import ContactsFilter from "./components/ContactsFilter/ContactsFilter";

function App() {
  return (
    <>
      <Header />
      <Storage>
        {({ saveToStorage, getFromStorage }) => (
          <>
            <InputForm saveToStorage={saveToStorage} />
            <ContactsFilter />
            <ContactList
              saveToStorage={saveToStorage}
              getFromStorage={getFromStorage}
            />
          </>
        )}
      </Storage>
    </>
  );
}

export default App;
