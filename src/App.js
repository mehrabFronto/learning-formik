import "./App.css";
import { useFormik } from "formik";

const initialValues = { name: "", email: "", password: "" };

const onSubmit = (values) => console.log(values);

const validate = (values) => {
   let errors = {};

   if (!values.name) {
      errors.name = "name is requierd";
   }
   if (!values.email) {
      errors.email = "email is requierd";
   }
   if (!values.password) {
      errors.password = "password is requierd";
   }

   return errors;
};

const App = () => {
   const formik = useFormik({
      initialValues,
      onSubmit,
      validate,
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
                  onBlur={formik.handleBlur}
               />
               {formik.errors.name && formik.touched.name && (
                  <h3>{formik.errors.name}</h3>
               )}
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
                  onBlur={formik.handleBlur}
               />
               {formik.errors.email && formik.touched.email && (
                  <h3>{formik.errors.email}</h3>
               )}
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
                  onBlur={formik.handleBlur}
               />
               {formik.errors.password && formik.touched.password && (
                  <h3>{formik.errors.password}</h3>
               )}
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
