import React from 'react';
import AppHeader from '../app-header/app-header';
import styles from './app.module.css'
import BurgerIngredients from '../burger-ingridiends/burger-ingridients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import ReactDOM from 'react-dom/client';
import{} from '@ya.praktikum/react-developer-burger-ui-components'


function App() {
  
  const[imgState,setImgState] =React.useState({ 
    isLoading: false,
    hasError: false,
    data:[]})
 const API_URL = 'https://norma.nomoreparties.space/api/ingredients';
  const  getState = () => {
    setImgState({ ...imgState, hasError: false, isLoading: true });
    fetch(API_URL)
      .then(res => res.json())
      .then(rslt=> setImgState({ ...imgState,data:rslt.data, isLoading: false }))
      .catch(e => {
        setImgState({ ...imgState, hasError: true, isLoading: false });
      });
  };
    React.useEffect(()=> {
  getState();
  
  },[])
 
 
  return (
    
    <main className={styles.app} >
      <AppHeader/>
    { !imgState.isLoading && imgState.data.length &&
      <BurgerIngredients props={imgState.data} />}
    { !imgState.isLoading && imgState.data.length &&
      <BurgerConstructor props={imgState.data}/>}
      
     </main>
  );
}

export default App;
