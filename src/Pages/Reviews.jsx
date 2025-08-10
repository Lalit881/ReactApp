import { useParams } from "react-router-dom";
import { products } from "../Data/products";

export default function Reviews() {
    const {id} = useParams();
    const product = products.find((p) => p.id === id)

    return(
        <div>
            <h3>Reviews for {product.name}</h3>
            <ul>
                {product.reviews.map((r,i)=>(
                    <li key={i}>{r}</li>
                ))}
            </ul>
        </div>
    )
}