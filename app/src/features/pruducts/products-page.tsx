import  { useEffect, useState } from 'react'
import { api } from '../../app/api';
import { ProductItem } from './product-item';
export const ProductsPage = () => {
 const [products,setProsucts]=useState<any[]>([]);

 useEffect( ()=>{
   api.getProducts({}).then(data=>{
    //console.log(data)
    setProsucts(data.results);
   });
 },[]);


  return (
    <>
       

<div className="font-[sans-serif] bg-gray-100">
      <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Premium Sneakers</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
        { products?.map(p=> <ProductItem {...p}/>)}
      </div>
      </div>
    </div>
    </>
  )
}
