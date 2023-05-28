import "../../styles/login/input.scss"

const Input = ({htmlFor, placeholder,
handleChangeInput}) => {

  const changeInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    handleChangeInput (inputValue, inputName)
  }

  return (
      <input
      required
      className='inputText'
        type="text"
        name={htmlFor}
        value=""
        id={htmlFor}
        placeholder={placeholder}
        onChange={changeInput}
      />
  );
};

export default Input;
