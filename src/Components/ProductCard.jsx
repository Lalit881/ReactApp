import { Link } from "react-router-dom";

export default function ProductCrad(products) {
    return (
        <div style={{border: "1px solid #ccc", padding: 10, margin: 10}}>
            <h3>{products.products.name}</h3>
            <p>Price: {products.products.price}</p>
            <Link to={`/products/${products.products.id}`}>View Details</Link>
        </div>
    )
}