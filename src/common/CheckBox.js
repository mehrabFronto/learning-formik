const CheckBox = ({ name, formik }) => {
   const intrests = [
      { label: "React.js", value: "React.js" },
      { label: "Vue.js", value: "Vue.js" },
      { label: "Angular.js", value: "Angular.js" },
   ];

   return (
      <div className="form__control">
         {/* title */}
         <label className="form__title">Intrests</label>
         {/* check boxes */}
         <div className="form__checkBox">
            {intrests.map((item) => {
               return (
                  <div
                     key={item.value}
                     className="form__checkBox__control">
                     <input
                        type="checkbox"
                        name={name}
                        id={item.value}
                        value={item.value}
                        onChange={formik.handleChange}
                        checked={formik.values[name].includes(item.value)}
                     />
                     <label
                        htmlFor={item.value}
                        className="form__title">
                        {item.label}
                     </label>
                  </div>
               );
            })}
         </div>
         {/* validation message */}
         {formik.errors[name] && <h3>{formik.errors[name]}</h3>}
      </div>
   );
};

export default CheckBox;
