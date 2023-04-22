import "./App.css";
import { useFormik } from "formik";
import * as Yup from "yup";

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
               <div className="form__control">
                  <label
                     className="form__title"
                     htmlFor="name">
                     Name :
                  </label>
                  <input
                     id="name"
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
                  <label
                     className="form__title"
                     htmlFor="e-mail">
                     E-mail :
                  </label>
                  <input
                     id="e-mail"
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
                  <label
                     className="form__title"
                     htmlFor="phoneNumber">
                     Phone Number :
                  </label>
                  <input
                     id="phoneNumber"
                     name="phoneNumber"
                     placeholder="phone number..."
                     type="text"
                     className="form__input"
                     {...formik.getFieldProps("phoneNumber")}
                  />
                  {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                     <h3>{formik.errors.phoneNumber}</h3>
                  )}
               </div>
               {/* password section */}
               <div className="form__control">
                  <label
                     className="form__title"
                     htmlFor="password">
                     Password :
                  </label>
                  <input
                     id="password"
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
               {/* confirm section */}
               <div className="form__control">
                  <label
                     className="form__title"
                     htmlFor="confirmPassword">
                     Confirm Password :
                  </label>
                  <input
                     id="confirmPassword"
                     name="rePassword"
                     placeholder="confirm password..."
                     type="password"
                     className="form__input"
                     {...formik.getFieldProps("rePassword")}
                  />
                  {formik.errors.rePassword && formik.touched.rePassword && (
                     <h3>{formik.errors.rePassword}</h3>
                  )}
               </div>
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
