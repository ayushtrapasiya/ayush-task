import { useEffect } from "react";
import Filters from "../Components/Filters/Filters";
import ProductGrid from "../Components/ProductGrid/ProductGrid";
import { useProductStore } from "../store";


export default function Products() {
  const fetchProducts = useProductStore((s) => s.fetchProducts);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Filters />
      <ProductGrid />
    </>
  );
}
