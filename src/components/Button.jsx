function Button(props) {
  return (
    <button className="bg-neutral-400 text-white p-3 rounded-md hover:bg-neutral-500" {...props}>
      {props.children}
    </button>
  );
}

export default Button;
