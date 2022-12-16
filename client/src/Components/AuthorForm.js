import React, {useState} from 'react'
import axios from 'axios';
import {NavLink, useNavigate} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
const AuthorForm = () => {
    const [name, setName] = useState('');
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const onSubmitHandler =(e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/author',{
            name:name
        })
        .then((res) =>{
            console.log(res);
            navigate('/home')

        })
        .catch((err) => {
            const errorResponse = err.response.data.errors
            const errorArr = [];

            for (const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            
            setErrors(errorArr)
            console.log(err)
        })
    }
    const cancelHandle = () => {
        navigate('/home')
    }
    return (
        <div className='div-form'>
            <h1>Favorite Authors</h1>
            <NavLink  to={'/home'}>Home</NavLink>
            <form className='form' onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <label className="sr-only">Name</label><br/>
                <input className="form-control mx-sm-3" type={'text'} onChange={(e) => setName(e.target.value)}/><br/>
                <button className='btn btn-info' onClick={(e) => cancelHandle()}>Cancel</button>
                <input className="btn btn-primary" type={'submit'} value={'SUBMIT'}/>
            </form>
        </div>
    )
}

export default AuthorForm