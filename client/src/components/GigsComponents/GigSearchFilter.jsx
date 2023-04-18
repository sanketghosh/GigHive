function InputField({ placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="px-3 py-1.5 border-none rounded-sm focus:outline-gray-300 focus:outline-1 text-sm placeholder:capitalize placeholder:text-gray-300"
    />
  );
}

const GigSearchFilter = ({ label, placeholder1, placeholder2, buttonText }) => {
  const placeholders = [placeholder1, placeholder2];

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
      <label className="capitalize text-sm">{label}</label>
      {placeholders.map((data) => {
        return <InputField placeholder={data} key={data} />;
      })}
      <button className="text-sm capitalize px-3 py-1.5 bg-tomato-550 hover:bg-tomato-600 transition rounded-sm font-medium text-sage-100">
        {buttonText}
      </button>
    </div>
  );
};

export default GigSearchFilter;
