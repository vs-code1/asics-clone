function Button() {
  function handleChange() {
    alert("You CLick the Button.");
  }
  return (
    <div>
      <button onClick={handleChange}>Hii i am buttton</button>
    </div>
  );
}

export default Button;
