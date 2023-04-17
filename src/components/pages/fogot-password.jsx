import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";
import { forgotPasswordRequest } from "../../services/api";


const FogotPassword = () => {
const navigate =useNavigate();
const [form, setValue] = useState({ email: '',});

const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value })
  };
 
const handleClick =(e) =>{
  setValue({ ...form, [e.target.name]: e.target.value }) 
 forgotPasswordRequest(form.email).then(navigate('/reset-password'))
 
 }

 

  return (
    <div className={styles.container}>
       <form className={styles.form}>
      <h1 style={{ padding: "0", margin: "0" }}>Восстановление пароля</h1>
      <EmailInput
        type={"text"}
        placeholder={"Укажите e-mail"}
        onChange={onChange}
        value={form.email}
        name={"email"}
        error={false}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="ml-1"
      />

      <Button htmlType="button" type="primary" size="large" onClick={handleClick}>
        Восстановить 
      </Button>
      </form>
      <div className={styles.links}>
        <div className={styles.link}>
          <p>Вспомнили пароль? </p>
          <Link to="/login">Войти</Link>
        </div>
      </div>
    </div>
  );
};

export { FogotPassword };
