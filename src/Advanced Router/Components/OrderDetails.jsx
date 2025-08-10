import { useParams } from "react-router-dom"

export default function OrderDetails() {
    const { orderId } = useParams();
    return(
        <div>
            <h3>Order Details for #{orderId}</h3>
            <p>Product: Quantity: 2, Status: Shipped</p>
        </div>
    )
}