import { useEffect, useState } from "react";
import { api } from "../../app/api";
import { ProductItem } from "./product-item";
import { Autocomplete, TextField } from "@mui/material";
import { useSearchParams } from "react-router-dom";
export const ProductsPage = () => {
  const [products, setProsucts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    api
      .getProducts(
        Number(params.get("categoryID")) || undefined,
        params.get("keyword") || ""
      )
      .then((data) => {
        setProsucts(data);
      });
  }, [params]);

  useEffect(() => {
    api.getProductsCategories().then((data) => {
      setCategories(
        data.map((x: any) => {
          return { label: x.title, id: x.id };
        })
      );
    });
  }, []);

  return (
    <>
      <div className="font-[sans-serif] bg-gray-100">
        <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
          <div className="w-full flex flex-row justify-between">
            <h2 className="text-4xl font-extrabold me-20 text-gray-800 mb-12">
              רשימת מוצרים
            </h2>
            <div className="flex flex-row pt-3">
              <Autocomplete
                className="me-6"
                size="small"
                disablePortal
                onChange={(event: React.SyntheticEvent, value: any) => {
                  params.set("categoryID", value?.id);
                  setParams(params);
                }}
                id="combo-box-demo"
                options={categories}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="קטגוריות" />
                )}
              />
              <TextField
                onChange={(e) => {
                  params.set("keyword", e.target.value);
                  setParams(params);
                }}
                size="small"
                id="filled-basic"
                placeholder="חיפוש חופשי"
                label=""
                variant="outlined"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
            {products?.map((p) => (
              <ProductItem {...p} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
