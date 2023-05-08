import { useState, useRef, useEffect, FormEvent, FC } from "react";
import {
  Input,
  PasswordInput,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile-form.module.css"
import { getUserRequest, saveChangesUserRequest } from "../../services/api";


const ProfileForm:FC = () => {

    const [form, setValue] = useState({ name: "", email: "", password: "" });
    const [buttons, setVisibleButtons] = useState(false);
    const init = async () => {
      const getUsrdata = await getUserRequest();
      setValue({
        name: getUsrdata.user.name,
        email: getUsrdata.user.email,
        password: "",
      });
    };
  
    const inputRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLAnchorElement>(null);
    useEffect(() => {
      init();
       linkRef?.current?.focus();
    }, []);
  
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue({ ...form, [e.target.name]: e.target.value });
      setVisibleButtons(true);
    };
  
    const onIconClick = () => {
      setTimeout(() => inputRef?.current?.focus(), 0);
    };
  
    const handleSubmit =  (event:FormEvent<HTMLFormElement>) =>{
      event.preventDefault();
      if (form.password.length > 2) {
        saveChangesUserRequest(form.name, form.email, form.password);
        setVisibleButtons(false);
      }
    };
  
    const handleEscapeButton = () => {
      init();
      setVisibleButtons(false);
      linkRef?.current?.focus();
    };



   return (
    <div>  <form className={styles.form} onSubmit={handleSubmit} >
    <Input
      type={"text"}
      placeholder={"Имя"}
      onChange={onChange}
      value={form.name}
      name={"name"}
      error={false}
      errorText={"Ошибка"}
      size={"default"}
      extraClass="ml-1"
      icon={"EditIcon"}
      ref={inputRef}
      onIconClick={onIconClick}
    />
    <EmailInput
      onChange={onChange}
      value={form.email}
      name={"email"}
      placeholder="Логин"
      isIcon={true}
      extraClass="mb-2"
    />
    <PasswordInput
      onChange={onChange}
      placeholder={"Пароль"}
      value={form.password}
      name={"password"}
      extraClass="mb-2"
      icon={"EditIcon"}
    />
    {buttons && (
      <div style={{ display: "flex", gap: "16px" }}>
       <Button htmlType="submit" type="primary" size="large" >
          Сохранить
        </Button>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={handleEscapeButton}
        >
          Отмена
        </Button>
      </div>
    )}
  </form></div>
  )
}

export {ProfileForm};