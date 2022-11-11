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
    setProduct({...product,[e.target.name]: e.target.value});
  }

  const handleSubmit = (e) =>{
    e.priventDetault();
    item.push(product);
    setItem([...item]);
    
  }
  console.log("item".item);
  return (
    <div className="grid grid-cols-2 mt-56">
    <div className='flex justify-center item-center'>
      <div className='bg-white  w-2/5 p-6 rounded'>
      <h1 className='uppercase text-2xl text-center'>add product</h1>
      <form onSubmit={handleSubmit}>
          <label className='block'>ID  </label>
          <input
                 name='id'
                 value={product.id}
                 onChange={handleChange}
          className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' 
          placeholder='input product id'/>
            <br/>
          <label className='block'>Name  </label>
          <input
                name='name'
                value={product.name}
                onChange={handleChange}
           className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' 
          placeholder='input product Name'/>
            <br/>
          <label className='block'>Quantity  </label>
          <input 
                 name='qty'
                 value={product.qty}
                 onChange={handleChange}
          className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' 
          placeholder='input product Qty'/>
            <br/>
          <label className='block'>Price  </label>
          <input
                 name='price'
                 value={product.price}
                 onChange={handleChange}
          className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' 
          placeholder='input product Price'/>
          <br/>
          <button className='px-10 py-2 text-md text-white bg-gray-600 rounded '>Submit</button>
      </form>
      </div> 
      </div>
      <div className='px-6'>
        <div className='grid grid-cols-3'>
        {item.map((res,index) =>{
          return(
            <div className='bg-white p-5 ' key={index}> 
            <button className='float-right bg-red-500 px-2 text-white rounded-full'>i</button>
            </div>
          )
        })}
        </div>
        
      </div>
    </div>
  )
}

export default App


