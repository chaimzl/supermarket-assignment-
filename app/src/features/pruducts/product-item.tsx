import React from "react";
import { ProductItem as ProductItemProps } from "../../app/types/ProductItem.type";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const ProductItem = (props: ProductItemProps) => {
  return (
    <>
     <div className="bg-white  rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
     
      <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full  cursor-pointer absolute top-4 left-4">
       
        <IconButton
        
        color="primary"
        aria-label="add to shopping cart"
      >
        <AddShoppingCartIcon />
      </IconButton>
      </div>

      <div className="w-5/6 h-[150px] overflow-hidden p-7 mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
        <img
          src={props.imageUrl}
          alt="Product 1"
          className="h-full w-full object-contain"
        />
      </div>

      <div>
        <h3 className="text-lg font-extrabold text-gray-800">{props.title}</h3>
        <p className="text-gray-600 text-sm mt-2">{props.description}</p>
        <h4 className="text-lg text-gray-800 font-bold mt-4">₪{props.price}</h4>
      </div>
     
    </div>
    </>
   
  );
};
