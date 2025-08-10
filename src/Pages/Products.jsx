import ProductCrad from "../Components/ProductCard";
import { products } from "../Data/products";

export default function Products() {
    return (
        <div>
            <h2>All Products</h2>
            <div style={{ display: 'flex'}}>
                {products.map((p)=>(
                    <ProductCrad key={p.id} products={p}/>
                ))}
            </div>
        </div>
    )
}
