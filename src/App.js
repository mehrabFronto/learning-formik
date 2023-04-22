import "./App.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "./common/Input";
import Radio from "./common/Radio";

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
               <Radio
                  name="gender"
                  formik={formik}
               />
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
