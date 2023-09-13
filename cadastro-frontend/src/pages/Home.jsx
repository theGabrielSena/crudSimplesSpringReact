import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {

    const{id}=useParams();

    useEffect(() => {
        loadUsers();
    }, []);


    const [users, setUsers] = useState([]);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8050/users");
        setUsers(result.data);
    }

    const deleteUser = async(id)=>{
        await axios.delete(`http://localhost:8050/user/${id}`)
        loadUsers();
    };

    return (
        <div className='container'>
            <div className="py-4">
                <table className="table border shadown">
                    <thead>
                        <tr>
                            <th scope="col">Codigo</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Usuario</th>
                            <th scope="col">Email</th>
                            <th scope="col">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>

                                    <td>
                                        <Link className="btn btn-success mx-2" to={`/viewuser/${user.id}`}>Visualizar</Link>
                                        <Link className="btn btn-outline-warning mx-2" to={`/edituser/${user.id}`}>Editar</Link>
                                        <button className="btn btn-danger mx-2" onClick={()=>deleteUser(user.id)}>Deletar</button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};
