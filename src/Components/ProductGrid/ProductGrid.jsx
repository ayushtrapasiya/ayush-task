
import ProductCard from '../ProductCard/ProductCard'
import "./product-grid.css";
import { useProductStore } from '../../store';

export default function ProductGrid() {
  const { filteredProducts } = useProductStore();

  return (
    <div className="grid">
      {filteredProducts.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
