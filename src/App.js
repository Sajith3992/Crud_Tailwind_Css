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
        <h2>Center Product</h2>
      </center>
      <form>
          <label>ID</label>
      </form>
    </div>
  )
}

export default App


