import "./App.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "./common/Input";

const initialValues = {
   name: "",
   email: "",
   password: "",
   rePassword: "",
   phoneNumber: "",
   gender: "",
};

const onSubmit = (values) => console.log(values);

const validationSchema = Yup.object({
   name: Yup.string().min(6).required("Name is required"),
   email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
   password: Yup.string()
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
      .required("Password is required"),
   rePassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "re-passwords must match")
      .required("re-password is required"),
   phoneNumber: Yup.string()
      .matches(/^[0-9]{11}$/, "Invalid phone number")
      .required("Phone number is required"),
   gender: Yup.string().required("Gender is required"),
});

const App = () => {
   const formik = useFormik({
      initialValues,
      onSubmit,
      validationSchema,
      validateOnMount: true,
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
               <Input
                  label="Name"
                  name="name"
                  formik={formik}
                  placeholder="name..."
               />
               {/* email section */}
               <Input
                  label="E-mail"
                  name="email"
                  formik={formik}
                  placeholder="email..."
               />
               {/* phone number section */}
               <Input
                  label="Phone Number"
                  name="phoneNumber"
                  formik={formik}
                  placeholder="phone number..."
               />
               {/* password section */}
               <Input
                  label="Password"
                  name="password"
                  formik={formik}
                  placeholder="password..."
                  type="password"
               />
               {/* confirm section */}
               <Input
                  label="Confirm Password"
                  name="rePassword"
                  formik={formik}
                  placeholder="confirm password..."
                  type="password"
               />
               {/* gender section */}
               <div className="form__control">
                  {/* title */}
                  <label className="form__title">Gender</label>
                  {/* radioes */}
                  <div className="form__radio">
                     {/* male radio */}
                     <div className="form__radio__control">
                        <input
                           name="gender"
                           type="radio"
                           value="0"
                           id="0"
                           onChange={formik.handleChange}
                           checked={formik.values.gender === "0"}
                        />
                        <label
                           className="form__title"
                           htmlFor="0">
                           Male
                        </label>
                     </div>
                     {/* female radio */}
                     <div className="form__radio__control">
                        <input
                           name="gender"
                           type="radio"
                           value="1"
                           id="1"
                           onChange={formik.handleChange}
                           checked={formik.values.gender === "1"}
                        />
                        <label
                           className="form__title"
                           htmlFor="1">
                           Female
                        </label>
                     </div>
                  </div>
                  {/* validation message */}
                  {formik.errors.gender && formik.touched.gender && (
                     <h3>{formik.errors.gender}</h3>
                  )}
               </div>
               {/* submit btn */}
               <button
                  className="btn"
                  type="submit"
                  disabled={!formik.isValid}>
                  Sign Up
               </button>
            </div>
         </form>
      </div>
   );
};

export default App;
