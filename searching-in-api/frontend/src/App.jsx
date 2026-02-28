import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'


function App() {

  //const [products, error, loading] = customReactQuery('/api/products');

  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {

    const controller = new AbortController() // this code is to avoid raced condition

    //IFE -> immediately invoked function
    // semicolon for safity purpose
    ;(async () => {
      try {
        setLoading(true)
        setError(false)
        const response = await axios.get('/api/products?search=' + search, {
          signal: controller.signal
        } )
        console.log(response.data);
        setProducts(response.data)
        setLoading(false)
      } catch (error) {
        if(axios.isCancel(error)){
          console.log('Request canceled', error.message);
          return;
        }
        setError(true)
        setLoading(false)
      }
    })()

    // cleanup method -> unmount the previous code
    return () => {controller.abort()}

  }, [search])


  // if(error){
  //   return <h1>Something went wrong</h1>
  // }
  // if(loading){
  //   return <h1>Loading...</h1>
  // }

  

  return (
    <>
      <h1>Chai aur API in React</h1>
      <input type="text" placeholder='Search' 
      value={search} 
      onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <h1>Loading...</h1> }
      {error && (<h1>Something went wrong</h1>)}
      <h2>Number of Product are: {products.length} </h2>
    </>
  )
}

export default App

// react query


const customReactQuery = (urlPath) => {
 

  return [products, error, loading]
}