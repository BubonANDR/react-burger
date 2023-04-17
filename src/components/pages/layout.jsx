import { Outlet } from "react-router-dom"
import AppHeader from "../app-header/app-header"
import styles from '../app/app.module.css';


const Layout = () => {
  return (
    <div className={styles.app}>
    <AppHeader />

    <Outlet/>
  
     </div>
  )
}

export {Layout}


