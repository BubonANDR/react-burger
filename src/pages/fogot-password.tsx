import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";
import { forgotPasswordRequest } from "../services/api";

const FogotPassword = () => {
  const navigate = useNavigate();
  const [form, setValue] = useState({ email: "" });

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    forgotPasswordRequest(form.email).then(()=>navigate("/reset-password"));
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Восстановление пароля</h1>
        <EmailInput
          placeholder={"Укажите e-mail"}
          onChange={onChange}
          value={form.email}
          name={"email"}
          size={"default"}
          extraClass="ml-1"
        />

        <Button htmlType="submit" type="primary" size="large">
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
