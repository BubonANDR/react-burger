import { Link,useNavigate } from "react-router-dom";
import {  FormEvent, useState } from "react";
import {
    Input,
    PasswordInput,
    Button,EmailInput
  } from "@ya.praktikum/react-developer-burger-ui-components";
  import styles from "./login.module.css";
import { getCookie } from "../services/utils";
import { registrAction } from "../services/actions/registration";
import { useTypedDispatch, useTypedSelector } from "../hooks/Hooks";



  const Register =()=> {
    
    const dispatch = useTypedDispatch();
   
     const navigate =useNavigate();
const [form, setValue] = useState({ name:'',email: '',password:'',});

const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
  setValue({ ...form, [e.target.name]: e.target.value });
};
 
const handleSubmit =  (event:FormEvent<HTMLFormElement>) =>{
  event.preventDefault();
dispatch(registrAction(form.name,form.email,form.password))
navigate("/login",{replace:true})
  }
  
  console.log(getCookie('exp'))
  return (
    
    <div className={styles.container}>
     <form className={styles.form} onSubmit={handleSubmit} >
    <h1 className={styles.title}>Регистрация</h1>
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
          <Button htmlType="submit" type="primary" size="large" >
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