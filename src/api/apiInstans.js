import { instance } from "./axios";

// for all products
const allProduct = async () => {
  try {
    const response = await instance.get("/products");

    return response.data.products;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { allProduct };
