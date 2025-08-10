import { Link, Outlet, useParams } from "react-router-dom";
import { products } from "../Data/products";

export default function ProductDetail(){
    const { id } = useParams();
    const product = products.find((p) => p.id === id)
    console.log(product)

    return(
        <div>
            <h2>{product.name} (ID: {id})</h2>
            <p>Price: {product.price}</p>
            <Link to="review">See Review</Link>
            <hr/>
            <Outlet/>
        </div>
    )
}