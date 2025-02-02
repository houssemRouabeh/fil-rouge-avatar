import React from "react";

function CustomInput({ type, label, ...props }) {
  //   const tab = ["text", "email", "password"];

  //   const [element1, element2, element3] = tab;

  //   const obj = {
  //     name: "Houssem",
  //     email: "scksqhfisq@gskfgsqk.com",
  //     password: "123456",
  //   };

  //   const { name, email, password } = obj;

  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input id={label} type={type} placeholder={props.placeholder} />
    </>
  );
}

export default CustomInput;
