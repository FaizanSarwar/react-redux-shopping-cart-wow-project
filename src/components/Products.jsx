import React from 'react'
import currencyFormat from '../utils'

const Products = ({products}) => {
    
  return (
    <div>
        
        <ul className="products">
            {products.map((product)=>{
                return(
                <li key={product.id}>

                    <div className="product">
                        <a href={`${product.id}` }>
                            <img src={product.image} alt={product.title} />
                            <p>{product.title}</p>
                        </a>
                        <div className="productduct-price">
                            <div>{currencyFormat(product.price)}</div>
                            <button className="button primary">Add to cart</button>
                        </div>
                    </div>




                </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Products