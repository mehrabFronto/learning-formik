import React from "react";

const SelectComponent = ({ name, formik }) => {
   const selectOptions = [
      { label: "Iran", value: "IR" },
      { label: "Germany", value: "GER" },
      { label: "USA", value: "US" },
   ];

   return (
      <div className="form__control">
         <label className="form__title">Nationality</label>
         <select
            className="form__select"
            {...formik.getFieldProps(name)}
            name={name}>
            {/* default value */}
            <option value="">Select</option>
            {/* nationality options */}
            {selectOptions.map((item) => (
               <option
                  key={item.value}
                  value={item.value}>
                  {item.label}
               </option>
            ))}
         </select>
         {formik.errors[name] && formik.touched[name] && (
            <h3>{formik.errors[name]}</h3>
         )}
      </div>
   );
};

export default SelectComponent;
