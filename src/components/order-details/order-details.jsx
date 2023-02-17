import React from "react";
import  done from '../../images/done.svg'

const OrderDetails=()=>{
return(
<>
<p className="text text_type_digits-large pt-30">67899</p>
<p className="text text_type_main-large pt-8">идентификатор заказа</p>
<img src={done} style={{width:120,height:120}} className="pt-15"/>
<p className="text text_type_main-medium pt-15 ">Ваш заказ начали готовить</p>
<p className="text text_type_main-medium pt-2 pb-30">Дождитесь готовности на орбитальной станции</p>
</>

)

}
export default OrderDetails