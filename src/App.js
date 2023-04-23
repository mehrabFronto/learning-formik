import "./App.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "./common/Input";
import Radio from "./common/Radio";
import SelectComponent from "./common/SelectComponent";
import CheckBox from "./common/CheckBox";
import axios from "axios";

const initialValues = {
   name: "",
   email: "",
   password: "",
   confirmPassword: "",
   phoneNumber: "",
   gender: "",
   nationality: "",
   intrests: [],
   terms: false,
};

const onSubmit = (values) => axios.post("http://localhost:3001/users", values);

const validationSchema = Yup.object({
   name: Yup.string().min(6).required("Name is required"),
   email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
   password: Yup.string()
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
      .required("Password is required"),
   confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "re-passwords must match")
      .required("re-password is required"),
   phoneNumber: Yup.string()
      .matches(/^[0-9]{11}$/, "Invalid phone number")
      .required("Phone number is required"),
   gender: Yup.string().required("Gender is required"),
   nationality: Yup.string().required("select nationality"),
   intrests: Yup.array().min(1).required("select one intrests at least"),
   terms: Yup.boolean()
      .oneOf([true], "You must accept the terms and conditions")
      .required("You must accept the terms and conditions"),
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
                  name="confirmPassword"
                  formik={formik}
                  placeholder="confirm password..."
                  type="password"
               />
               {/* gender section */}
               <Radio
                  name="gender"
                  formik={formik}
               />
               {/* nationality section */}
               <SelectComponent
                  formik={formik}
                  name="nationality"
               />
               {/* intrests section */}
               <CheckBox
                  name="intrests"
                  formik={formik}
               />
               {/* terms section */}
               <div className="form__checkBox__control">
                  <input
                     type="checkbox"
                     id="terms"
                     name="terms"
                     value={true}
                     onChange={formik.handleChange}
                     checked={formik.values.terms}
                  />
                  <label
                     htmlFor="terms"
                     className="form__title">
                     Terms And Conditions
                  </label>
               </div>
               {formik.errors.terms && <h3>{formik.errors.terms}</h3>}
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
