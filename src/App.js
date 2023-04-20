import "./App.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
   name: "",
   email: "",
   password: "",
   rePassword: "",
   phoneNumber: "",
};

const onSubmit = (values) => console.log(values);

const validationSchema = Yup.object({
   name: Yup.string().required("Name is required").min(6),
   email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
   password: Yup.string()
      .required("Password is required")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
   rePassword: Yup.string()
      .required("re-password is required")
      .oneOf([Yup.ref("password"), null], "re-passwords must match"),
   phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]{11}$/, "Invalid phone number"),
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
               <h2>Sign Up Form</h2>
            </div>
            {/* body */}
            <div className="form__body">
               {/* name section */}
               <div className="form__control">
                  <label className="form__title">name :</label>
                  <input
                     name="name"
                     placeholder="name..."
                     type="text"
                     className="form__input"
                     {...formik.getFieldProps("name")}
                  />
                  {formik.errors.name && formik.touched.name && (
                     <h3>{formik.errors.name}</h3>
                  )}
               </div>
               {/* email section */}
               <div className="form__control">
                  <label className="form__title">email :</label>
                  <input
                     name="email"
                     placeholder="email..."
                     type="text"
                     className="form__input"
                     {...formik.getFieldProps("email")}
                  />
                  {formik.errors.email && formik.touched.email && (
                     <h3>{formik.errors.email}</h3>
                  )}
               </div>
               {/* phone number section */}
               <div className="form__control">
                  <label className="form__title">phone number :</label>
                  <input
                     name="phoneNumber"
                     placeholder="phone number..."
                     type="number"
                     className="form__input"
                     {...formik.getFieldProps("phoneNumber")}
                  />
                  {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                     <h3>{formik.errors.phoneNumber}</h3>
                  )}
               </div>
               {/* password section */}
               <div className="form__control">
                  <label className="form__title">password :</label>
                  <input
                     name="password"
                     placeholder="password..."
                     type="password"
                     className="form__input"
                     {...formik.getFieldProps("password")}
                  />
                  {formik.errors.password && formik.touched.password && (
                     <h3>{formik.errors.password}</h3>
                  )}
               </div>
               {/* re-password section */}
               <div className="form__control">
                  <label className="form__title">re-password :</label>
                  <input
                     name="rePassword"
                     placeholder="re-password..."
                     type="password"
                     className="form__input"
                     {...formik.getFieldProps("rePassword")}
                  />
                  {formik.errors.rePassword && formik.touched.rePassword && (
                     <h3>{formik.errors.rePassword}</h3>
                  )}
               </div>
               {/* submit btn */}
               <button
                  className="btn"
                  type="submit">
                  Sign Up
               </button>
            </div>
         </form>
      </div>
   );
};

export default App;
