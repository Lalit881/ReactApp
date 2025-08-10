import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () =>{
    const navigate = useNavigate();
    const handLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");

    }
    return(
        <div>
            <h1>Dashboard Page(Protected)</h1>
            <button onClick={handLogout}>Logout</button>
        </div>
    )
}

export default Dashboard;