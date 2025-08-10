import React, { useEffect, useMemo, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/users";
const ROLES = ['admin', 'editor', 'viewer'];

const UserList = () =>{
    const [users, setUsers] = useState([]);
    const [roleFilter, setRoleFilter] = useState("All");

    useEffect(()=>{
        const fetchdata = async () =>{
            const res = await fetch(API_URL);
            const data = await res.json();

            const userWithRole = data.map((user)=>({
                ...user,
                role: ROLES[Math.floor(Math.random() * ROLES.length)], 
            }))

            setUsers(userWithRole);
        }

        fetchdata();
    },[])

    const filterUsers =  useMemo(()=>{
        console.log('Filter users by Role', roleFilter)
        return roleFilter === 'All' ? users : users.filter((users)=> users.role === roleFilter);
    }, [users, roleFilter]);

    return (
        <div>
            <h2>Users (Role Filter)</h2>
            <select value={roleFilter} onChange={(e)=> setRoleFilter(e.target.value)}>
                <option value="All">All</option>
                    {ROLES.map((role)=>(
                        <option key={role}>
                                {role}
                        </option>
                    ))}
            </select>

            <ul>
                {filterUsers.map((user)=>(
                    <li key={user.id}>
                        <strong>{user.name}</strong> -{user.email} - {user.role}
                    </li>
                ))}
            </ul>
        </div>
    );


};


export default UserList;