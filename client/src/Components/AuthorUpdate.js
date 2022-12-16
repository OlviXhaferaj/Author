import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {  NavLink,useNavigate, useParams } from 'react-router-dom';

const AuthorUpdate = () => {
    const {id} = useParams();
    const [name, setName] = useState();
    const [errors, setErrors] = useState([]);
    const [auth, setAuth] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
        .then((res) => {
            setAuth(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/'+ id)
        .then(res => {
            setName(res.data.name)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const updateAuthor = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/author/' +id, {
            name:name
        })
        .then(res => {
            console.log(res);
            navigate('/home')
        })
        .catch((err) => {
            console.log(err)
            const errorResponse = err.response.data.errors
            const errorArr = [];

            for (const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            
            setErrors(errorArr)
        })
    }
        const cancelHandle = () => {
            navigate('/home')
        }
        const foundItem = auth.find((item) => {
            return item._id === id
        })
        console.log(foundItem)
    return (
        <div>
            {
                foundItem ?
                <div>
                    <h1>Favorite Authors</h1>
                                <p>The name of the user you are updating is: <b>{name}</b></p>
                                <NavLink  to={'/home'}>Home</NavLink>
                                <form className='form' onSubmit={updateAuthor}>
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <label className="sr-only">Name</label><br/>
                    <input className="form-control mx-sm-3" type={'text'} onChange={(e) => setName(e.target.value)}/><br/>
                    <button className='btn btn-info' onClick={(e) => cancelHandle()}>Cancel</button>
                    <input className="btn btn-primary" type={'submit'} value={'SUBMIT'}/>
                                </form>
                </div>
                :
                <div>
                    <p>"We're sorry, but we could not find the author you are looking for. Would you like to add an author to our database?</p>
                    <p>If So then please click down below to fill in the form!</p>
                    <NavLink to={'/new'}>New</NavLink>
                </div>
            }
        </div>
    ) 
}

export default AuthorUpdate