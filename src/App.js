import React ,{useState}from "react";
import './App.css'
import Filter from "./components/Filter";
import Products from "./components/Products";
import data from './data.json'




const  App=()=> {
  const [productList,setProductList] = useState({
    products:data.products,
    size:"",
    sort:""
  })

  //code to filter products by their size
  const filterProducts=(e)=>{
    // console.log(e.target.value);
    if(e.target.value===""){
      setProductList({
        size:e.target.value,
        products:data.products
      })
    }
    else{
      setProductList({
        size:e.target.value,
        products : data.products.filter((val)=>val.availableSizes.indexOf(e.target.value)>=0)
  
      })
    }
  



  }
  //code to sort products 
  const sortProducts=(e)=>{
    const sortVal =e.target.value;
    setProductList((state)=>{
      return{
      sort:sortVal,
      products:state.products.slice().sort((a,b)=>( 
        sortVal==="lowest"?
        ((a.price>b.price)?1:-1):
        sortVal==="highest"?
        ((a.price<b.price)?1:-1):
        ((a._id<b._id)?1:-1)
      ))
  }})


  }
 
    return (
      <>
  
          <div className="grid-container">
            <header>
              <a href="/">React Shopping Cart</a>
              {/* <Link to="/admin">Admin</Link> */}
            </header>
            <main>
              <div className="content">
                <div className="main">
                  <Filter count ={productList.products.length}
                   size={productList.size} 
                  sort ={productList.sort}
                  filterProducts={filterProducts}
                  sortProducts = {sortProducts}
                  
                  />
                  <Products products={productList.products}/>
                </div>
               <div className="sidebar">cart items</div>
              </div>
             
             
            </main>
            <footer>All right is reserved.</footer>
          </div>
      
      </>
    );
  
}

export default App;