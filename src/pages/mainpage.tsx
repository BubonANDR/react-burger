import BurgerConstructor from '../components/burger-constructor/burger-constructor';
import BurgerIngredients from '../components/burger-ingridiends/burger-ingridients';
import styles from '../components/app/app.module.css';
import { useTypedSelector } from '../hooks/Hooks';


const Mainpage = () => {
    
    const imgState = useTypedSelector(store=>store.burgIngridReducer);
    
   
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