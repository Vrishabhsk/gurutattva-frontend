export default function Input({
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  style = "",
  required = true,
  pattern = null,
  title = "",
}) {
  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className={`${
        placeholder && value.length === 0 ? "text-center" : "text-left"
      } py-1 px-3 text-xl rounded-xl border border-violet-600 shadow-xl bg-transparent w-[70%] my-2 ${style}`}
      placeholder={placeholder}
      pattern={pattern}
      title={title}
      required
    />
  );
}
