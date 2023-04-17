import { Link,useNavigate } from "react-router-dom";
import {  useState } from "react";
import {
    Input,
    PasswordInput,
    Button,EmailInput
  } from "@ya.praktikum/react-developer-burger-ui-components";
  import styles from "./login.module.css";
import { registrAction } from "../../services/actions/actions";
import { useSelector,useDispatch } from "react-redux";
import { getCookie } from "../../services/utils";



  const Register =()=> {
    
    const dispatch = useDispatch();
    const regData = useSelector(
      (store) => store.registrReducer.data
    );
    const navigate =useNavigate();
const [form, setValue] = useState({ name:'',email: '',password:'',});

const onChange = e => {
  setValue({ ...form, [e.target.name]: e.target.value });
};
 
const handleClick =() =>{
dispatch(registrAction(form.name,form.email,form.password))
navigate("/login",{replace:true})
  }
  
  console.log(getCookie('exp'))
  return (
    
    <div className={styles.container}>
    <form className={styles.form}>
          <h1 style={{ padding: "0", margin: "0" }}>Регистрация</h1>
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
          />
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
            Зарегистрироваться
          </Button>

          </form>
          <div className={styles.links}>
        <div className={styles.link}>
          <p>Уже зарегистрированны? </p>
          <Link to="/login">Войти </Link>
        </div>
             </div>
        </div>
      );
  
}

export {Register}