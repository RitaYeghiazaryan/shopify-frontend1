//COMPONENTS
import { useState } from "react";
import axios from "axios";
//BASE COMPONENTS
import Input from "src/components/input/Input.component";
import Button from "src/components/button/Button.component";

//STYLES
import styles from "./SignUp.module.scss";
const SignUp = () => {
  const [inputState, setInputState] = useState({});
  const handleInput = (event) => {
    const { value, name } = event.target;
    setInputState({ ...inputState, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submit");
    const result = await axios.post("auth/signup", inputState);

    console.log(result);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1>I do not have a account</h1>
      <p>Sign up with your email and password</p>
      <Input
        name="name"
        type="text"
        required
        label="Display Name"
        onChange={handleInput}
        value={inputState.name}
      />
      <Input
        name="email"
        type="email"
        required
        label="Email"
        onChange={handleInput}
        value={inputState.email}
      />
      <Input
        name="password"
        type="password"
        required
        label="Password"
        value={inputState.password}
        onChange={handleInput}
      />
      <Input
        name="passwordConfirm"
        type="password"
        required
        label="Confirm Password"
        value={inputState.passwordConfirm}
        onChange={handleInput}
      />
      <Button type="submit">Sign Up</Button>
    </form>
  );
};
export default SignUp;
