import React from "react";
import {
   PasswordInput,
  Button,EmailInput
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../../services/actions/actions";
import { getCookie } from "../../services/utils";

const Login = () => {
  const navigate =useNavigate(null)
  const dispatch =useDispatch();
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(getCookie("token"))
  };


  const handleClick =  () =>{
   dispatch(loginAction(form.email,form.password));
    navigate("/",{replace:true})
      }
  return (
    <div className={styles.container}>
       <form className={styles.form}>
      <h1 style={{ padding: "0", margin: "0" }}>Вход</h1>
      <EmailInput
        type={"text"}
        placeholder={"E-mail"}
        onChange={onChange}
        value={form.email}
        name={"email"}
        error={false}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="ml-1"
      />
      <PasswordInput
        onChange={onChange}
        placeholder={"Пароль"}
        value={form.password}
        name={"password"}
        extraClass="mb-2"
      />
      <Button htmlType="button" type="primary" size="large" onClick={handleClick}>
        Вход
      </Button>
      </form>
      <div className={styles.links}>
        <div className={styles.link}>
          <p>Вы - новый пользователь? </p>
          <Link to="/register"> Зарегистрироваться</Link>
        </div>
        <div className={styles.link}>
          <p>Забыли пароль? </p>
          <Link to="/forgot-password"> Восстановить пароль</Link>
        </div>
      </div>
    </div>
  );
};

export { Login };
