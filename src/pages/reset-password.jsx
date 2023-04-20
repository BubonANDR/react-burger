import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";
import { resetPasswordRequest } from "../services/api";

const ResetPassword = () => {

  const [form, setValue] = useState({ password: "", token: "" });

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit =  (event) =>{
    event.preventDefault();
    console.log(resetPasswordRequest(form.password, form.token));
  };

  return (
    <div className={styles.container}>
       <form className={styles.form} onSubmit={handleSubmit} >
        <h1 className={styles.title}>Восстановление пароля</h1>
        <PasswordInput
          onChange={onChange}
          placeholder={"Введите новый Пароль"}
          value={form.password}
          name={"password"}
          extraClass="mb-2"
        />
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          onChange={onChange}
          value={form.token}
          name={"token"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="ml-1"
        />

        <Button htmlType="submit" type="primary" size="large">
          Сохранить
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

export { ResetPassword };