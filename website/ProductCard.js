
export default function ProductCard({product}){

 return(
  <div style={{
   border:"1px solid #333",
   padding:20,
   borderRadius:10
  }}>

   <img src={product.image} width="100"/>

   <h3>{product.name}</h3>

   <p>${product.price}</p>

   <button>Add to cart</button>

  </div>
 )

}
