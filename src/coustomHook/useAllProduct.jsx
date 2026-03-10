import { allProduct } from "@/api/apiInstans";
import { useQuery } from "@tanstack/react-query";

const useAllProduct = () => {
  return useQuery({ queryKey: ["allproduct"], queryFn: allProduct });
};

export default useAllProduct;
