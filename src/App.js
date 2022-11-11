import React, { useState } from 'react'

const App = () => {
  
const [product, setProduct] = useState({
  id: "",
  name:"",
  qty:"",
  price:""

});

  return (
    <div>
      <center>
        <h2 className="text-3xl font-bold underline">Add Product</h2>
      </center>
      <form>
          <label>ID</label>
          <input placeholder='input product id'/>
      </form>
    </div>
  )
}

export default App


