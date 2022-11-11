import React, { useState } from 'react'

const App = () => {
  
const [product, setProduct] = useState({
  id: "",
  name:"",
  qty:"",
  price:""

});

  return (
    <div className="grid grid-cols-2">
    <div className='flex justify-center item-center'>
      <div className='bg-white  w-2/5 p-6 rounded'>
      <h1 className='uppercase text-2xl'>add product</h1>
      <form>
          <label className='block'>ID  </label>
          <input placeholder='input product id'/>
      </form>
      </div> 
      </div>
      <div>
        <h1>hello </h1>
      </div>
    </div>
  )
}

export default App


