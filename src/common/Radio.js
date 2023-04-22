const Radio = ({ name, formik }) => {
   const radioOptions = [
      { label: "male", value: "0" },
      { label: "female", value: "1" },
   ];

   return (
      <div className="form__control">
         {/* title */}
         <label className="form__title">Gender</label>
         {/* radioes */}
         <div className="form__radio">
            {radioOptions.map((item) => {
               return (
                  <div
                     className="form__radio__control"
                     key={item.value}>
                     <input
                        name={name}
                        type="radio"
                        value={item.value}
                        id={item.value}
                        onChange={formik.handleChange}
                        checked={formik.values.gender === item.value}
                     />
                     <label
                        className="form__title"
                        htmlFor={item.value}>
                        {item.label}
                     </label>
                  </div>
               );
            })}
         </div>
         {/* validation message */}
         {formik.errors[name] && formik.touched[name] && (
            <h3>{formik.errors[name]}</h3>
         )}
      </div>
   );
};

export default Radio;
