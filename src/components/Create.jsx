import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate();
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    function clickHandler(event){
        event.preventDefault();
        const mockApi = "https://64b8432221b9aa6eb079b9fb.mockapi.io/crud";
        const header = {"Access-Control-Allow-Origin": "*"};
        axios.post(mockApi,{
            name: name,
            email: email,
            password: password,
            header
        })
        .then(()=>{
            navigate("/read");
        })
    }
    return (
        <div className='Create-Form'>
            <h2>Create</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" required 
                    onChange={(e)=>{
                        setName(e.target.value);
                    }}
                    name='name'
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" required
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}
                    name='email'
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" required 
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                    name='password'
                    />
                </div>
                <button type="submit" className="btn btn-primary"
                onClick={clickHandler}
                >Submit</button>
            </form>
        </div>
    );
};

export default Create;