//part import
import { useState } from "react";
import inputs from "../js-files/inputs";
import { v4 } from "uuid";

function Contacts() {
  //  part states
  const [alert, setAlert] = useState("");
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const [contacts, setContacts] = useState([]);
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
      !contact.lastname ||
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
    console.log(contacts);
  };
  // const addHandler = () => {
  //   console.log(contact);
  //   if (
  //     !contact.name ||
  //     !contact.lastname ||
  //     !contact.email ||
  //     !contact.phone
  //   ) {
  //     setAlert("Data Is Not Valid!");
  //   } else {
  //     setAlert("");
  //     const newContact = { ...contact, id: v4() };
  //     setContacts((contacts) => [...contacts, newContact]);
  //     setContact({
  //       name: "",
  //       lastName: "",
  //       email: "",
  //       phone: "",
  //     });
  //   }
  //   console.log(contacts);
  //   // setContact({
  //   //   id: "",
  //   //   name: "",
  //   //   lastname: "",
  //   //   email: "",
  //   //   phone: "",
  //   // });
  // };
  return (
    <>
      <div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={contact.value}
            onChange={changeHandler}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={contact.value}
            onChange={changeHandler}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={contact.value}
            onChange={changeHandler}
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone"
            value={contact.value}
            onChange={changeHandler}
          />
        </div>
        <button onClick={addHandler}>Add Contact</button>
      </div>
      <p>{alert}</p>
    </>
  );
}

export default Contacts;
