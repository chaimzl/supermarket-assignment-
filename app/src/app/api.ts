import axios from "axios";


export  const api = {
    async getProducts(post:any) {
      const response = await axios.get("/products.json");
  
      return response.data;
    },
    async getProductsCategories(post:any) {
        const response = await axios.post("/api/create-post", post);
    
        return response.data;
      },
      async setOrder(post:any) {
        const response = await axios.post("/api/create-post", post);
    
        return response.data;
      }
   
  };