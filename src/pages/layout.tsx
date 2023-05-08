import { Outlet } from "react-router-dom"
import AppHeader from "../components/app-header/app-header"
import styles from '../components/app/app.module.css';


const Layout = () => {
  return (
    <div className={styles.app}>
    <AppHeader />

    <Outlet/>
  
     </div>
  )
}

export {Layout}


