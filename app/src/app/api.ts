import axios from "axios";


export const api = {
  async getProducts(categoryId?:number, keyword?:string) {
    const response = await axios.get(`http://localhost:5071/api/products?${categoryId?'categoryID='+categoryId:''}&keyword=${keyword}`);

    return response.data;
  },
  async getProductsCategories() {
    const response = await axios.get("http://localhost:5071/api/categories");
    return response.data;
  },
  async setOrder(post: any) {
    const response = await axios.post("https://orders-api-lyd3loo7oa-zf.a.run.app/api/orders/create-order", post);

    return response.data;
  }

};