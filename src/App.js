import "./App.css";
import { useFormik } from "formik";

const initialValues = { name: "", email: "", password: "" };

const onSubmit = (values) => console.log(values);

const App = () => {
   const formik = useFormik({
      initialValues,
      onSubmit,
   });

   return (
      <div className="app">
         <form
            className="form"
            onSubmit={formik.handleSubmit}>
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
                  value={formik.values.name}
                  onChange={formik.handleChange}
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
                  value={formik.values.email}
                  onChange={formik.handleChange}
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
                  value={formik.values.password}
                  onChange={formik.handleChange}
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
