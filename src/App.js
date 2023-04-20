import "./App.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = { name: "", email: "", password: "" };

const onSubmit = (values) => console.log(values);

const validationSchema = Yup.object({
   name: Yup.string().required("Name is requierd").min(6),
   email: Yup.string()
      .email("invalid email format")
      .required("Email is requierd"),
   password: Yup.string()
      .required("Password is required")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const App = () => {
   const formik = useFormik({
      initialValues,
      onSubmit,
      validationSchema,
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
