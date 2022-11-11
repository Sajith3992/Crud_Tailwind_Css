import React, { useState } from 'react'

const App = () => {

const [item , setItem] = useState([])
const [product, setProduct] = useState({
  id: "",
  name:"",
  qty:"",
  price:""

});

  const handleChange = (e) =>{

  }
  return (
    <div className="grid grid-cols-2 mt-56">
    <div className='flex justify-center item-center'>
      <div className='bg-white  w-2/5 p-6 rounded'>
      <h1 className='uppercase text-2xl text-center'>add product</h1>
      <form>
          <label className='block'>ID  </label>
          <input className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' 
          placeholder='input product id'/>
            <br/>
          <label className='block'>Name  </label>
          <input className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' 
          placeholder='input product Name'/>
            <br/>
          <label className='block'>Quantity  </label>
          <input className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' 
          placeholder='input product Qty'/>
            <br/>
          <label className='block'>Price  </label>
          <input className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' 
          placeholder='input product Price'/>
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


