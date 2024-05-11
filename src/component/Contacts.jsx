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
    lastName: "",
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
    console.log(contacts);
  };

  return (
    <>
      <div>
        <div>
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
      </div>
      <p>{alert}</p>
    </>
  );
}

export default Contacts;
