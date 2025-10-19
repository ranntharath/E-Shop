import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const DropDownFilter = ({ option = [], onChange, label }) => {
  const [Open, setOpen] = useState(true);
  const [check, setCheck] = useState([]);
  function handleChange(value) {
    const update = check.includes(value)
      ? check.filter((v) => v !== value)
      : [...check, value];
    setCheck(update);
    onChange(update);
  }
  return (
    <div className="">
      <div
        onClick={() => setOpen(!Open)}
        className="flex justify-between items-center"
      >
        <p className="py-3 font-semibold text-letter-color">{label}</p>
        <IoIosArrowDown
          className={`${
            Open ? "" : "rotate-180"
          } transition-all duration-200 ease-in `}
        />
      </div>
      <div
        className={`flex pl-3 flex-col justify-center items-start gap-2  overflow-hidden transition-all duration-200 ease-in ${
          Open ? "max-h-96" : "max-h-0"
        } `}
      >
        {option.map((e, index) => {
          return (
            <div key={index} className="flex items-center gap-3">
              <input
                type="checkbox"
                className="accent-primary-color"
                id={e}
                value={e}
                onChange={() => handleChange(e)}
              />
              <label htmlFor={e}>{e}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DropDownFilter;
