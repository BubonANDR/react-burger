import React, { FormEvent } from "react";
import {
  PasswordInput,
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCookie, setCookie } from "../services/utils";
import { loginAction } from "../services/actions/login";

const Login = () => {
  const navigate = useNavigate();
  const dispatch: ReturnType<typeof useDispatch | any> = useDispatch();
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const userFromLogin = useSelector((store: any) => store.loginReducer.data);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(loginAction(form.email, form.password));
    setCookie("token", userFromLogin.accessToken);
    window.localStorage.setItem("refreshtoken", userFromLogin.refreshToken);
    return navigate(from.pathname !== "/order" ? from : "/", { replace: true });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
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

        <Button htmlType="submit" type="primary" size="large">
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
