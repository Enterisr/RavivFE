import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function TableUsers() {
    const [users, setUsers] = useState([]);

    const {id} = useParams();

    
    useEffect ( () =>{
        loadUsers();
    },[])

    const loadUsers = async() => { 
        const result =await axios.get("http://localhost:8080/secured/users",{ withCredentials: true })
        setUsers(result.data);
    }
    const deleteUser =async (id) =>{
        await axios.delete(`http://localhost:8080/secured/user/${id}`,{ withCredentials: true })
        loadUsers();
    }
    
return (
    <div className="container flex-col overflow-x-auto sm:-mx-6 lg:-mx-8 inline-block py-2 sm:px-6 lg:px-8 overflow-hidden min-w-full text-center text-sm font-light ">
        <div className='py-4 bg-transparent'>

            <table className=" w-full text-xl text-left text-black dark:text-white">
                <thead className=" bg-transparent text-xl text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                    <tr>

                        <th scope="col" class="px-3 py-3">id#</th>
                        <th scope="col" class="px-3 py-3">username</th>
                        <th scope="col" class="px-3 py-3">password</th>
                        <th scope="col" class="px-3 py-3">email</th>
                        <th scope="col" class="px-3 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) =>(
                        <tr className=" bg-transparent dark:bg-black">
                            <th scope="row" key={index}>
                                {index + 1}
                            </th>
                            <td className="px-3 py-4">{user.username}</td>
                            <td className="px-3 py-4">{user.password}</td>
                            <td className="px-3 py-4">{user.email}</td>
                            <td className="px-3 py-4">
                                <Link className='btn btn-primary mx-2'
                                to={`/viewuser/${user.id}`}
                                >
                                    user information
                                </Link>

                                <Link className='btn btn-outline-primary mx-2' 
                                 to={`/edituser/${user.id}`}
                                >       
                                edit
                                </Link>
                                <button className ='btn btn-danger mx-2'
                                    onClick={ () => deleteUser(user.id)}                             
                                >
                                delete user
                                </button>

                            </td>
                        </tr>
                    ))
                    }
                   
                </tbody>
            </table>
        </div>
    </div>
  )
}
