import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';
import Update from './Update';

const Read = () => {
    const[data, setData] = useState([]);
    const mockApi = "https://64b8432221b9aa6eb079b9fb.mockapi.io/crud";
    function getData(){
        axios.get(mockApi).then((res)=>{
            console.log(res.data);
            setData(res.data);
        })
    }
    useEffect(()=>{ 
        getData();
    },[])
    function handleDelete(id){
        axios.delete(`https://64b8432221b9aa6eb079b9fb.mockapi.io/crud/${id}`)
        .then(()=>{
            getData();
        })
    }
    const setUpdate = (id, name, email, password) =>{
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
    }
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>                    
                    <th scope="col">Edit</th>                    
                    <th scope="col">Delete</th>                   
                    </tr>
                </thead>
                {
                    data.map((eachData, id)=>{
                        return(
                            <>
                                <tbody key={id}>
                                    <tr>
                                        <th scope="row">{eachData.id}</th>
                                        <td>{eachData.name}</td>
                                        <td>{eachData.email}</td>
                                        <td>{eachData.password}</td>
                                        <td>
                                            <NavLink to="/update">
                                                <button className='btn btn-success'
                                                onClick={()=>setUpdate(
                                                    eachData.id,
                                                    eachData.name,
                                                    eachData.email,
                                                    eachData.password
                                                )}>Edit</button>
                                            </NavLink>
                                        </td>
                                        <td>
                                            <button className='btn btn-danger'
                                            onClick={()=>handleDelete(eachData.id)}>Delete {" "}</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </>
                        )
                    })
                }
                </table>
        </div>
    );
};

export default Read;