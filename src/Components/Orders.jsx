import { Link, Outlet } from "react-router-dom";

export default function Orders() {
    return(
        <div>
            <h2>Oder List</h2>
            <ul>
                <li><Link to="101">Order #101</Link></li>
                <li><Link to="102">Order #102</Link></li>
            </ul>
            <hr/>
            <Outlet/>
        </div>
    )
}