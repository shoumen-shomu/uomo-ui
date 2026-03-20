import { instance } from "./axios";

// for all products
const allProductThirty = async () => {
  try {
    const response = await instance.get("/products");

    return response.data.products;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { allProductThirty };
