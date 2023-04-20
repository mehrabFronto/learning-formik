import React, { useState } from "react";
import "./App.css";

const App = () => {
   const [user, setUser] = useState({ name: "", email: "", password: "" });

   const changeHandler = ({ target }) => {
      setUser({ ...user, [target.name]: target.value });
   };

   const submitHandler = (e) => {
      e.preventDefault();
      setUser({ name: "", email: "", password: "" });
   };

   return (
      <div className="app">
         <form
            className="form"
            onSubmit={submitHandler}>
            {/* header */}
            <div className="form__header">
               <h2>Log In Form</h2>
            </div>
            {/* name section */}
            <div className="form__section">
               <label className="form__title">name :</label>
               <input
                  name="name"
                  placeholder="name..."
                  type="text"
                  className="form__input"
                  value={user.name}
                  onChange={changeHandler}
               />
            </div>
            {/* email section */}
            <div className="form__section">
               <label className="form__title">email :</label>
               <input
                  name="email"
                  placeholder="email..."
                  type="text"
                  className="form__input"
                  value={user.email}
                  onChange={changeHandler}
               />
            </div>
            {/* password section */}
            <div className="form__section">
               <label className="form__title">password :</label>
               <input
                  name="password"
                  placeholder="password..."
                  type="text"
                  className="form__input"
                  value={user.password}
                  onChange={changeHandler}
               />
            </div>
            {/* submit btn */}
            <button
               className="btn"
               type="submit">
               Log In
            </button>
         </form>
      </div>
   );
};

export default App;
