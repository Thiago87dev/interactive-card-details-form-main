interface InputProps {
  title: string;
  placeholder: string;
  width: string;
  paddingLeft: string;
  error?: string;
  value: string;
  cardNumber?: boolean;
  maxLength?:number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  title,
  placeholder,
  width,
  paddingLeft,
  value,
  error,
  maxLength,
  cardNumber = false,
  onChange,
}: InputProps) => {
  return (
    <div className={`flex flex-col ${width} gap-1 `}>
      <label
        className=" text-colorDarkViolet uppercase font-semibold text-xs tracking-wider"
        htmlFor="inputId"
      >
        {title}
      </label>
      {cardNumber ? (
        <div>
          <input
            className={`${paddingLeft} w-full rounded-lg h-10 border-solid border-2 border-colorLightGrayishViolet focus:border-colorPrimary focus:outline-none text-black`}
            id="inputId"
            type="text"
            placeholder={placeholder}
            value={value}
            maxLength={maxLength}
            onChange={onChange}
            onKeyDown={(e) => {
              if (e.key === " ") {
                e.preventDefault();
              }
            }}
          />
          <p className="text-red-500">{error}</p>   
        </div>
      ) : (
        <div
          
        >
          <input
          className={`${paddingLeft} rounded-lg w-full h-10 border-solid border-2 border-colorLightGrayishViolet focus:border-colorPrimary focus:outline-none text-black`}
            id="inputId"
            type="text"
            placeholder={placeholder}
            value={value}
            maxLength={maxLength}
            onChange={onChange}
          />
          <p className="text-red-500">{error}</p>
        </div>
      )}
    </div>
  );
};

export default Input;
