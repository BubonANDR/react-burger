import { useSelector } from 'react-redux';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingridiends/burger-ingridients';
import styles from '../app/app.module.css';


const Mainpage = () => {
    
    const imgState = useSelector((store) => store.burgIngridReducer);  
   
  return (
    
          <main className={styles.page}>
            {!imgState.isLoading && imgState.data.length && (
              <>
                <BurgerIngredients />
                <BurgerConstructor />
              </>
            )}
          </main>
                 
          
  )
}


export {Mainpage};