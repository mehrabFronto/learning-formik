const Input = ({ label, name, type = "text", placeholder, formik }) => {
   return (
      <div className="form__control">
         <label
            className="form__title"
            htmlFor="name">
            {label}
         </label>
         <input
            id={name}
            name={name}
            type={type}
            className="form__input"
            placeholder={placeholder}
            {...formik.getFieldProps(name)}
         />
         {formik.errors[name] && formik.touched[name] && (
            <h3>{formik.errors[name]}</h3>
         )}
      </div>
   );
};

export default Input;
