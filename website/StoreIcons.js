
import { FaShoppingCart, FaWallet, FaGift } from "react-icons/fa"

export default function StoreIcons(){

 return(
  <div style={{
   display:"flex",
   justifyContent:"center",
   gap:30,
   marginTop:20
  }}>
   <FaShoppingCart size={30}/>
   <FaWallet size={30}/>
   <FaGift size={30}/>
  </div>
 )

}
