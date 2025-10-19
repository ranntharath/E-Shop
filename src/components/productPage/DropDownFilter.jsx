import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const DropDownFilter = ({ option = [], onChange }) => {
  const [indexOpen, setIndexOpen] = useState(null);
  const [check, setCheck] = useState([]);
  function handleChange(value) {
    const update = check.includes(value)
      ? check.filter((v) => v !== value)
      : [...check, value];
    setCheck(update);
    onChange(update);
  }
  return (
    <div>
      <div
        onClick={() => setIndexOpen(!indexOpen)}
        className="flex justify-between items-center"
      >
        <p className="py-3 font-semibold text-letter-color">Cagegories</p>
        <IoIosArrowDown
          className={`${
            indexOpen ? "" : "rotate-180"
          } transition-all duration-200 ease-in `}
        />
      </div>
      <div
        className={`flex flex-col justify-center items-start gap-2  overflow-hidden transition-all duration-200 ease-in ${
          indexOpen ? "max-h-96" : "max-h-0"
        } `}
      >
        {option.map((e, index) => {
          return (
            <div key={index} className="flex items-center gap-3">
              <input
                type="checkbox"
                className="accent-primary-color"
                id={e.value}
                value={e.value}
                onChange={() => handleChange(e.value)}
              />
              <label htmlFor={e.value}>{e.label}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DropDownFilter;
