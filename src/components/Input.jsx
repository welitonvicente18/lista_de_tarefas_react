function Input(props) {
  return (
    <input
      type={props.type}
      value={props.title}
      placeholder={props.placeholder}
      onChange={props.onChange}
      className="p-2 w-full outline-slate-400 rounded-md"
    //   {...props} a mesma coisa que seta os tipos
    />
  );
}

export default Input;
