import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import DeleteButton from './DeleteButton';
import { useNavigate } from 'react-router-dom';
const AuthorList = () => {
    const [authors, setAuthors] = useState([]);
    const navigate = useNavigate();
    const updateHandle = (id) => {
        navigate('/author/edit/'+id)
    }
    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
        .then((res) => {
            setAuthors(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
    const removeFromDom = authorid => {
        setAuthors(authors.filter(authors => authors._id !== authorid))
    }
    
        let sorted = [...authors].sort((a,b) => a.name > b.name ? 1 : -1)

    return (
        <div className='div-list'>
            <h1>Favorite Authors</h1>
            <NavLink to={'/new'}>Add new Author</NavLink>
            <p>We have quotes by:</p>
        <table className="table table-striped table-dark">
            <thead >
                <tr>
                    <th scope="col">Author</th>
                    <th scope="col" >Actions avaible</th>
                </tr>
            </thead>
        {
            sorted.map((item, index) => {
                return (
                    <tbody  key={index}>
                        <tr>
                                <td >{item.name}</td>
                                <td >
                                    <div className='td'>
                                        <button onClick={()=>updateHandle(item._id)} className="btn btn-primary">Edit</button>
                                        <DeleteButton authorid={item._id} succesCallback={() => {removeFromDom(item._id)}}/>
                                    </div></td>
                        </tr>
                    </tbody>
                )
            })
        }
        </table>
        </div>
    )
}

export default AuthorList