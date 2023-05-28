import React, { useState } from "react";
import css from "./Customer.module.css";

export const CustomerData = ({onChange}) => {
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleChangeValue = (evt) => {
    const { value, name } = evt.currentTarget;
    switch (name) {
      case "userName":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
        case "phone":
        setPhone(value);
        break;
        case "address":
        setAddress(value);
        break;
      default:
        return;
    }
    const user = ({ userName, email, phone, address });
    localStorage.setItem("user", JSON.stringify(user));
   
  };
 
  

  return (
    <div className={css.box}>
      <form className={css.form} >
        <label className={css.label}> Name</label>
        <input
          className={css.input}
          type="text"
          onChange={handleChangeValue}
          name="userName"
          
        ></input>
        <label className={css.label}> Email</label>
        <input
          className={css.input}
          type="email"
          onChange={handleChangeValue}
          name="email"
         
        ></input>
        <label className={css.label}>Phone</label>
        <input
          className={css.input}
          type="number"
          onChange={handleChangeValue}
          name="phone"
          
        ></input>
        <label className={css.label}> Address</label>
        <input
          className={css.input}
          type="text"
          onChange={handleChangeValue}
          name="address"
         
        ></input>
      </form>
    </div>
  );
};