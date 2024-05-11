//part import
import { useState } from "react";
import inputs from "../js-files/inputs";
import { v4 } from "uuid";
import ContactList from "./ContactList";
import styles from "./Contacts.module.css";

function Contacts() {
  //  part states
  const [alert, setAlert] = useState("");
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });
  //   part functions
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
    // console.log(contact);
  };
  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("please enter valid data!");
      return;
    }
    setAlert("");
    const newContact = { ...contact, id: v4() };
    setContacts((contacts) => [...contacts, newContact]);
    setContact({
      id: "",
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
    // console.log(contacts);
  };
  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.form}>
          {inputs.map((input, index) => (
            <input
              key={index}
              type={input.type}
              placeholder={input.placeholder}
              name={input.name}
              value={contact[input.name]}
              onChange={changeHandler}
            />
          ))}
          <button onClick={addHandler}>Add Contact</button>
        </div>
        <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
        <ContactList contacts={contacts} deleteHandler={deleteHandler} />
      </div>
      {/* <div className={styles.container}>
        <div className={styles.form}>
          {inputs.map((input, index) => (
            <input
              key={index}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              value={contact[input.name]}
              onChange={changeHandler}
            />
          ))}
        </div>
        <button onClick={addHandler}>Add Contact</button>
        <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
        <div>
          <ContactList contacts={contacts} deleteHandler={deleteHandler} />
        </div>
      </div> */}
    </>
  );
}

export default Contacts;
