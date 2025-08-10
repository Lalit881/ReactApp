import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function DashboardLayout() {
    return (
        <div style={{display: 'flex'}}>
            <Sidebar/>
            <div style={{flex: 1, padding: "20px"}}>
                <Header/>
                <h1>DashBoard</h1>
                <nav>
                    <Link to="orders">Orders</Link> |{" "}
                    <Link to="products">Products</Link> |{" "}
                    <Link to="settings">Settings</Link>
                </nav>
                <hr/>
                <Outlet/>
            </div>
        </div>
    )
}