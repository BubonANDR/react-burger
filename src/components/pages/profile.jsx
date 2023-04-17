import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import {
  Input,
  PasswordInput,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";
import {
  logOut,
  getUserRequest,
  saveChangesUserRequest,
} from "../../services/api";
import { useDispatch } from "react-redux";

const Profile = () => {
  const navigate = useNavigate();
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

  const inputRef = useRef(null);
  const linkRef = useRef(null);
  useEffect(() => {
    init();
    linkRef.current.focus();
  }, []);

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
    setVisibleButtons(true);
  };

  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
  };

  const handleSaveButton = () => {
    if (form.password.length > 2) {
      saveChangesUserRequest(form.name, form.email, form.password);
      setVisibleButtons(false);
    }
  };

  const handleEscapeButton = () => {
    init();
    setVisibleButtons(false);
    linkRef.current.focus();
  };

  return (
    <div className={styles.container}>
      <div className={styles.profilelinks}>
        <div className={styles.profilelink}>
          <Link
            to="/profile"
            ref={linkRef}
            className={`text text_type_main-medium ${styles.linktext}`}
          >
            Профиль
          </Link>
        </div>
        <div className={styles.profilelink}>
          <Link
            to="order-list"
            className={`text text_type_main-medium ${styles.linktext}`}
          >
            История заказов
          </Link>
        </div>
        <div className={styles.profilelink}>
          <Link
            to="/login"
            onClick={logOut}
            className={`text text_type_main-medium ${styles.linktext}`}
          >
            Выход
          </Link>
        </div>
        <p>В этом разделе вы можете изменить свои персональные данные</p>
      </div>

      <form className={styles.form}>
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
            <Button
              htmlType="button"
              type="primary"
              size="large"
              onClick={handleSaveButton}
            >
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
      </form>
    </div>
  );
};

export { Profile };
