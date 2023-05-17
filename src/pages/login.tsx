import React, { FormEvent, useCallback, useEffect } from "react";
import {
  PasswordInput,
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { setCookie } from "../services/utils";
import { loginAction } from "../services/actions/login";
import { useTypedDispatch, useTypedSelector } from "../hooks/Hooks";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useTypedDispatch()
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

   
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
   dispatch(loginAction(form.email, form.password));
   setTimeout(()=>navigate(from.pathname !== "/order" ? from : "/", { replace: true }),500)}
  
  
 


  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit} data-cy="loginForm">
        <h1 className={styles.title}>Вход</h1>
        <EmailInput
          placeholder={"E-mail"}
          onChange={onChange}
          value={form.email}
          name={"email"}
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

        <Button htmlType="submit" type="primary" size="large" data-cy="loginButton">
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
